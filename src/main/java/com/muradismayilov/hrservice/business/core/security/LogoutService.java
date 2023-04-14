package com.muradismayilov.hrservice.business.core.security;

import com.muradismayilov.hrservice.dataaccess.abstracts.TokenRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {

    @Autowired
    private final TokenRepository tokenRepository;

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {

        final String header = request.getHeader("Authorization");
        final String jwt;

        if(header==null || !header.startsWith("Bearer ")){//bu dongude yoxlayir ki gelen bos deyilse ve Bearerla baslamirsa kec diger requeste

            return;
        }
        jwt = header.substring(7);//gelen requestden headeri goturur

        var storedToken = tokenRepository.findByToken(jwt).orElse(null);
        if (storedToken !=null) {
            storedToken.setExpired(true);
            storedToken.setRevoked(true);
            tokenRepository.save(storedToken);
        }

    }
}
