package com.muradismayilov.hrservice.business.concretes;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.Claims;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {

    // @Value("${security.jwt.secret")//yml faylina yazilan secret key
    private static final String SECRET_KEY = "6E3272357538782F413F442A472D4B6150645367566B59703373367639792442";

    public String findUsername(String token){ //extractUsername

        return extractClaim(token, Claims::getSubject); // sonradan elave olunan extractClaim metodu istifade olunmamisdan once exportToken idi
                             //claimin icinden username hissesini tapir
    }

   /* public <T> T exportToken(String token, Function<Claims,T> claimsTFunction) {

        final Claims claims = Jwts.parserBuilder().setSigningKey(getKey())
                .build().parseClaimsJws(token).getBody();
        return claimsTFunction.apply(claims);

    }*/

    public <T> T extractClaim(String token, Function<Claims,T> claimsResolver) { // sonradan elave olunan

        final Claims claims = extractAllClaims(token);//butun claimler icinden 1 claimi

        return claimsResolver.apply(claims);

    }
    private Claims extractAllClaims(String token){ // sonradan elave olunan
        return Jwts.parserBuilder().setSigningKey(getKey())//token icindeki butun claimleri tapir
                .build().parseClaimsJws(token).getBody();

    }

    private Key getKey(){
        byte[] key = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(key);
    }

    public boolean tokenControl(String token, UserDetails userDetails) { // isTokenValid

        final String username = findUsername(token);//gelen token userdetailsle uygundurmu
        return (username.equals(userDetails.getUsername())&& !isTokenExpired(token));//deyisdirildi eger username uygun gelirse expired olub olmadigini yoxlayir
    }

    public boolean isTokenExpired(String token){//sonradan elave olunan

        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {//sonradan elave olunan
        return extractClaim(token,Claims::getExpiration);
    }//tokendan expiration date cixartma

    public String generateToken(UserDetails userDetails){ // sonradan elave olunan
        return generateToken(new HashMap<>(),userDetails);
    }
    public String generateToken(Map<String,Object> extraClaims, UserDetails userDetails) { // onemli / deyisdirildi

        return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60*24))
                .signWith(getKey(), SignatureAlgorithm.HS256)
                .compact();
    }

}
