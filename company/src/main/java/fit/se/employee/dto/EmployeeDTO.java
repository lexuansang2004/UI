package fit.se.employee.dto;

import lombok.Data;

@Data
public class EmployeeDTO {
    private Long empId;
    private String empName;
    private Double salary;
    private String deptName;
}