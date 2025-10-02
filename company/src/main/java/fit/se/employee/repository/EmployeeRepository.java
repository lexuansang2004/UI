package fit.se.employee.repository;

import fit.se.employee.model.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Page<Employee> findAll(Pageable pageable);

    Page<Employee> findByDept_DeptId(Long deptId, Pageable pageable);

    Page<Employee> findByEmpNameContainingIgnoreCase(String name, Pageable pageable);

    Page<Employee> findBySalaryGreaterThanEqual(Double salary, Pageable pageable);
}