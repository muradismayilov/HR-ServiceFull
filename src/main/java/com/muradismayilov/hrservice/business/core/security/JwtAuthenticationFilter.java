package com.muradismayilov.hrservice.business.core.security;

import com.muradismayilov.hrservice.business.concretes.JwtService;
import com.muradismayilov.hrservice.dataaccess.abstracts.TokenRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@RequiredArgsConstructor
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private final JwtService jwtService;

    @Autowired
    private final UserDetailsService userDetailsService;

    @Autowired
    private final TokenRepository tokenRepository;
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        final String header = request.getHeader("Authorization");
        final String jwt;
        final String username;
        if(header==null || !header.startsWith("Bearer ")){//bu dongude yoxlayir ki gelen bos deyilse ve Bearerla baslamirsa kec diger requeste
            filterChain.doFilter(request,response);
            return;
        }
        jwt = header.substring(7);//gelen requestden headeri goturur
        username = jwtService.findUsername(jwt);//headerin icinden username cixartmaq ucun jwt servicdeki metodu cagir

        if (username!=null && SecurityContextHolder.getContext().getAuthentication()==null){//ikinci hissesi yoxlayir ki user daha once qosulub autenticate olub yoxsa yox
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);//db den userin melumatlarini goturur
            var isTokenValid = tokenRepository.findByToken(jwt)
                    .map(t-> !t.isExpired() && !t.isRevoked())
                    .orElse(false);//db den tokenleri yoxlayir valid veya expired olmagini
            if(jwtService.tokenControl(jwt,userDetails) && isTokenValid){
                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
        }
        filterChain.doFilter(request,response);
    }
}
