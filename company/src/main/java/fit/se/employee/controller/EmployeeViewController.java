package fit.se.employee.controller;

import fit.se.employee.dto.EmployeeDTO;
import fit.se.employee.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/view")
@RequiredArgsConstructor
public class EmployeeViewController {

    private final EmployeeService employeeService;

    @GetMapping("/employees")
    public String showEmployees(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(required = false) String keyword,
            Model model) {

        Page<EmployeeDTO> employeePage;

        if (keyword != null && !keyword.isBlank()) {
            employeePage = employeeService.searchByName(keyword, page, 5);
        } else {
            employeePage = employeeService.getEmployees(page, 5);
        }

        model.addAttribute("employees", employeePage.getContent());
        model.addAttribute("currentPage", page);
        model.addAttribute("totalPages", employeePage.getTotalPages());
        model.addAttribute("keyword", keyword);
        model.addAttribute("pageSize", 5); // 👈 thêm dòng này

        return "employees";
    }
}