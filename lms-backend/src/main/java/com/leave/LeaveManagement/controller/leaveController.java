package com.leave.LeaveManagement.controller;


import com.leave.LeaveManagement.model.empLeaves;
import com.leave.LeaveManagement.service.EmpNotFoundEx;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
public class leaveController {

    @Autowired
    private com.leave.LeaveManagement.repository.leaveRepository leaveRepository;


    //add leave employee details into database
    @PostMapping("/leave")
    empLeaves details (@RequestBody empLeaves details){
        return  leaveRepository.save(details);
    }


    //get all leave employee details from the database
    @GetMapping("/allDetails")
    List<empLeaves> getAllLeaves(){
        return leaveRepository.findAll();
    }


    //get leave employee by id
    @GetMapping("/leave/{id}")
    empLeaves details(@PathVariable Long id){
        return leaveRepository.findById(id).orElseThrow(() ->new  EmpNotFoundEx(id));
    }

    //edit the Employee details using by given employee id
    @PutMapping("/leave/{id}")
    empLeaves updateLeave(@RequestBody empLeaves updateDetails, @PathVariable Long id){
        return  leaveRepository.findById(id)
                .map(leave ->{
                    leave.setEmpName(updateDetails.getEmpName());
                    leave.setDepartment(updateDetails.getDepartment());
                    leave.setLeaveDate(updateDetails.getLeaveDate());
                    leave.setReason(updateDetails.getReason());
                    return leaveRepository.save(leave);

                }).orElseThrow(()-> new EmpNotFoundEx(id));
    }

    //delete the leave employee details  by using id
    @DeleteMapping("/leave/{id}")
    public ResponseEntity<?> deleteLeave(@PathVariable Long id){
        if(!leaveRepository.existsById(id)){
            throw new EmpNotFoundEx(id);
        }
        leaveRepository.deleteById(id);
        return ResponseEntity.ok("Employee " + id + " has been deleted.");
    }




}
