package fit.se.employee.controller;

import fit.se.employee.model.Department;
import fit.se.employee.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/view")
@RequiredArgsConstructor
public class DepartmentViewController {

    private final DepartmentService departmentService;

    @GetMapping("/departments")
    public String showDepartments(Model model) {
        List<Department> departments = departmentService.getDepartments(0, 100).getContent();
        model.addAttribute("departments", departments);
        return "departments";
    }
}
