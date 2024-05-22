package com.rtsp.rtspserver.model;

public class User {
    private int userId;
    private String userLogin;
    private int roleId;
    private String salt;
    private String hashPassword;
    private String password;

    // repo
    public User(int userId, String userLogin, int roleId, String salt, String hashPassword) {
        this.userId = userId;
        this.userLogin = userLogin;
        this.roleId = roleId;
        this.salt = salt;
        this.hashPassword = hashPassword;
    }

    // info
    public User(int userId, String userLogin, int roleId) {
        this.userId = userId;
        this.userLogin = userLogin;
        this.roleId = roleId;
    }
    //creation
    public User(int userId, String userLogin, int roleId, String password) {
        this.userId = userId;
        this.userLogin = userLogin;
        this.roleId = roleId;
        this.password = password;
    }


    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserLogin() {
        return userLogin;
    }

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public String getHashPassword() {
        return hashPassword;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public void setHashPassword(String hashPassword) {
        this.hashPassword = hashPassword;
    }
}

