/* 
 * Copyright 2017-2018, Redux Software. 
 * 
 * File: CorsFilter.java
 * Date: Oct 23, 2017
 * Author: P7107311
 * URL: www.redux.com
*/
package apps.proman.api.servlet;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import apps.proman.api.data.ResourceConstants;

/**
 * Servlet filter for CORS support.
 * <br>
 * Refer: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
 */
//@Component
//@Order(Ordered.HIGHEST_PRECEDENCE)
@WebFilter(filterName = "CorsFilter", urlPatterns = ResourceConstants.BASE_URL_PATTERN)
public class CorsFilter extends ApiFilter {

    @Override
    public void doFilter(final HttpServletRequest httpRequest, final HttpServletResponse httpResponse, final FilterChain chain) throws IOException, ServletException {

        httpResponse.setHeader("Access-Control-Allow-Origin", "*");
        httpResponse.setHeader("Access-Control-Allow-Methods", "HEAD, POST, PUT, GET, PATCH, DELETE");
        httpResponse.setHeader("Access-Control-Max-Age", "3600");
        httpResponse.setHeader("Access-Control-Allow-Credentials", "true");
        httpResponse.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Requested-With, accept, Origin, Access-Control-Request-Method, Access-Control-Request-Headers, X-FORWARDED-FOR, authorization, client-id, location");
        httpResponse.setHeader("Access-Control-Expose-Headers", "access-token");

        chain.doFilter(httpRequest, httpResponse);
    }

    @Override
    public void destroy() {
        // do nothing
    }

}
