package apps.proman.api.controller;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import java.net.URL;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import apps.proman.api.model.UserDetailsResponse;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserAdminControllerIntegrationTest {

    @LocalServerPort
    private int port;

    private URL base;

    @Autowired
    private TestRestTemplate template;

    @Before
    public void setUp() throws Exception {
        this.base = new URL("http://localhost:" + port + "/api/v1/users");
    }

    @Test
    public void getUser() throws Exception {
        final ResponseEntity<UserDetailsResponse> response = template.getForEntity(base.toString() + "/7d174a25-ba31-45a8-85b4-b06ffc9d5f8f",UserDetailsResponse.class);
        assertEquals(HttpStatus.OK,response.getStatusCode());
        final UserDetailsResponse responseBody = response.getBody();
        assertEquals(responseBody.getId(), expected().getId());
    }

    private UserDetailsResponse expected() {
        UserDetailsResponse response = new UserDetailsResponse();
        response.setId("7d174a25-ba31-45a8-85b4-b06ffc9d5f8f");
        return response;
    }

}
