package com.muradismayilov.hrservice.business.concretes;

import com.muradismayilov.hrservice.business.requests.UserRequest;
import com.muradismayilov.hrservice.business.responses.UserResponse;
import com.muradismayilov.hrservice.dataaccess.abstracts.TokenRepository;
import com.muradismayilov.hrservice.dataaccess.abstracts.UserRepository;
import com.muradismayilov.hrservice.entity.concretes.Roles;
import com.muradismayilov.hrservice.entity.concretes.Token;
import com.muradismayilov.hrservice.entity.concretes.TokenType;
import com.muradismayilov.hrservice.entity.concretes.User;
import com.muradismayilov.hrservice.entity.abstracts.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final TokenRepository tokenRepository;
    private final JwtService jwtService;

    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private final AuthenticationManager authenticationManager;

    public UserResponse save(UserDto userDto) {

        final User user = User.builder()
                .name(userDto.getName())
                .username(userDto.getUsername())
                .password(passwordEncoder.encode(userDto.getPassword()))
                .role(Roles.USER).build();
        var savedUser = userRepository.save(user);

        final String jwttoken = jwtService.generateToken(user);

        saveUserToken(savedUser, jwttoken);

        return UserResponse.builder().token(jwttoken).build();
    }

    private void revokeAllUserTokens(User user){
        List<Token> validTokens = tokenRepository.findAllValidTokensByUser(user.getId());
        if (validTokens.isEmpty())
            return;
        validTokens.forEach(t->{
            t.setExpired(true);
            t.setRevoked(true);
        });
        tokenRepository.saveAll(validTokens);
    }

    private void saveUserToken(User user, String jwttoken) {
        var token = Token.builder()
                .user(user)
                .token(jwttoken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    public UserResponse auth(UserRequest userRequest) {

       /* try {
            System.out.println("Before auth " + userRequest.getUsername() + userRequest.getPassword());
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userRequest.getUsername(),userRequest.getPassword()));
        } catch (DisabledException e) {
            System.out.println("USER_DISABLED");
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            System.out.println("INVALID_CREDENTIALS");
            throw new Exception("INVALID_CREDENTIALS", e);
        }*/
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userRequest.getUsername(), userRequest.getPassword()));
        final User user = userRepository.findByUsername(userRequest.getUsername()).orElseThrow();
        final String jwttoken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user,jwttoken);
        return UserResponse.builder().token(jwttoken).build();
    }


}
