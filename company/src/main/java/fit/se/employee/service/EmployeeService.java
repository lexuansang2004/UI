package fit.se.employee.service;

import fit.se.employee.dto.EmployeeDTO;
import fit.se.employee.model.Employee;
import fit.se.employee.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    private EmployeeDTO convertToDTO(Employee emp) {
        EmployeeDTO dto = new EmployeeDTO();
        dto.setEmpId(emp.getEmpId());
        dto.setEmpName(emp.getEmpName());
        dto.setSalary(emp.getSalary());
        dto.setDeptName(emp.getDept() != null ? emp.getDept().getDeptName() : null);
        return dto;
    }

    public Page<EmployeeDTO> getEmployees(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("empId").ascending());
        Page<Employee> employees = employeeRepository.findAll(pageable);
        List<EmployeeDTO> dtos = employees.stream().map(this::convertToDTO).toList();
        return new PageImpl<>(dtos, pageable, employees.getTotalElements());
    }

    public Page<EmployeeDTO> getByDepartmentId(Long deptId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("empId").ascending());
        Page<Employee> employees = employeeRepository.findByDept_DeptId(deptId, pageable);
        List<EmployeeDTO> dtos = employees.stream().map(this::convertToDTO).toList();
        return new PageImpl<>(dtos, pageable, employees.getTotalElements());
    }

    public Page<EmployeeDTO> searchByName(String name, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Employee> employees = employeeRepository.findByEmpNameContainingIgnoreCase(name, pageable);
        List<EmployeeDTO> dtos = employees.stream().map(this::convertToDTO).toList();
        return new PageImpl<>(dtos, pageable, employees.getTotalElements());
    }

    public Page<EmployeeDTO> searchByMinSalary(Double salary, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Employee> employees = employeeRepository.findBySalaryGreaterThanEqual(salary, pageable);
        List<EmployeeDTO> dtos = employees.stream().map(this::convertToDTO).toList();
        return new PageImpl<>(dtos, pageable, employees.getTotalElements());
    }
}