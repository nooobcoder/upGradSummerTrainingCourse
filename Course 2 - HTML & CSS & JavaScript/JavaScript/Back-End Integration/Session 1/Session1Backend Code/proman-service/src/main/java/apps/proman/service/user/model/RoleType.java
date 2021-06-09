package apps.proman.service.user.model;

import java.util.HashMap;
import java.util.Map;

public enum RoleType {

    ADMINISTRATOR(101), PROJECT_MANAGER(102), ARCHITECT(103), TEAM_LEADER(104), TEAM_MEMBER(105);

    private static final Map<Integer, RoleType> LOOKUP = new HashMap();

    static {
        for (final RoleType enumeration : values()) {
            LOOKUP.put(enumeration.getCode(), enumeration);
        }
    }

    private final int code;

    RoleType(final int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }

    public static RoleType get(final int code) {
        return LOOKUP.get(code);
    }

}
