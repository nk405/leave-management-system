package com.leave.LeaveManagement.model;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Setter
@Getter
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class empLeaves {


    @Id
    @GeneratedValue
    private long id;
    private String EmpName;
    private String Department;
    private Date LeaveDate;
    private String Reason;

}
