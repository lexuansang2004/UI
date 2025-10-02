package fit.se.employee.service;

import fit.se.employee.model.Department;
import fit.se.employee.repository.DepartmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DepartmentService {

    private final DepartmentRepository departmentRepository;

    public Page<Department> getDepartments(int page, int size) {
        return departmentRepository.findAll(PageRequest.of(page, size));
    }

    public Page<Department> searchByName(String name, int page, int size) {
        return departmentRepository.findByDeptNameContainingIgnoreCase(name, PageRequest.of(page, size));
    }
}