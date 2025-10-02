package fit.se.employee.controller;

import fit.se.employee.dto.EmployeeDTO;
import fit.se.employee.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employees")
@RequiredArgsConstructor
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping
    public Page<EmployeeDTO> getEmployees(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return employeeService.getEmployees(page, size);
    }

    @GetMapping("/by-department")
    public Page<EmployeeDTO> getByDepartmentId(
            @RequestParam Long deptId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return employeeService.getByDepartmentId(deptId, page, size);
    }

    @GetMapping("/search-name")
    public Page<EmployeeDTO> searchByName(
            @RequestParam String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return employeeService.searchByName(name, page, size);
    }

    @GetMapping("/search-salary")
    public Page<EmployeeDTO> searchByMinSalary(
            @RequestParam Double salary,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return employeeService.searchByMinSalary(salary, page, size);
    }
}