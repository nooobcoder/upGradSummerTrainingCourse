package apps.proman.api.config;

import static apps.proman.api.data.ResourceConstants.BASE_URL_PATTERN;

import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@ComponentScan({"apps.proman.api.controller"})
@ServletComponentScan("apps.proman.api.servlet")
public class WebConfiguration implements WebMvcConfigurer {

//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping(BASE_URL_PATTERN)
//                .allowedOrigins("*")
//                .allowedMethods("HEAD, POST, PUT, GET, PATCH, DELETE")
//                .maxAge(3600)
//                .allowCredentials(true)
//                .allowedHeaders("Content-Type, X-Requested-With, accept, Origin, Access-Control-Request-Method, Access-Control-Request-Headers, X-FORWARDED-FOR, authorization, client-id, location")
//                .exposedHeaders("access-token");
//    }

}
