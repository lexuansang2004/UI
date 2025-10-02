package fit.se.employee.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "Employee")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long empId;

    private String empName;

    private Date dob;

    private Double salary; // 👈 Thêm dòng này

    @ManyToOne
    @JoinColumn(name = "dept_id")
    private Department dept;
}