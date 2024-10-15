package com.leave.LeaveManagement.service;

public class EmpNotFoundEx  extends RuntimeException{
    public EmpNotFoundEx (Long id){
        super("Employee for this id is not available: "+id);
    }
}
