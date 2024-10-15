package com.leave.LeaveManagement.repository;

import com.leave.LeaveManagement.model.empLeaves;
import org.springframework.data.jpa.repository.JpaRepository;

public interface leaveRepository extends JpaRepository<empLeaves,Long> {
}
