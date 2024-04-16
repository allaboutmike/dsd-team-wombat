package com.backend.admin_server.access_requests.utils;

import java.util.Date;

public class AccessRequestUtils {
    public static boolean isTtlValid(Date ttl) {
        return new Date().before(ttl);
    }
}
