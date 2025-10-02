CREATE TABLE department (
    dept_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(100) NOT NULL
);

CREATE TABLE employee (
    emp_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100) NOT NULL,
    dob DATE,
    dept_id BIGINT,
    FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

INSERT INTO department (dept_name) VALUES
                                       ('Human Resources'),
                                       ('Finance'),
                                       ('Engineering'),
                                       ('Marketing'),
                                       ('Customer Support');

INSERT INTO employee (emp_name, dob, dept_id) VALUES
                                                  ('Nguyen Van A', '1990-05-12', 1),
                                                  ('Tran Thi B', '1985-11-23', 2),
                                                  ('Le Van C', '1992-07-08', 3),
                                                  ('Pham Thi D', '1995-03-15', 4),
                                                  ('Hoang Van E', '1988-09-30', 5);

-- Yêu cầu  đề thêm salary de assert
ALTER TABLE employee ADD COLUMN salary DECIMAL(10,2);
UPDATE employee SET salary = 1200.00 WHERE emp_id = 1;
UPDATE employee SET salary = 1500.00 WHERE emp_id = 2;
UPDATE employee SET salary = 1800.00 WHERE emp_id = 3;
UPDATE employee SET salary = 2000.00 WHERE emp_id = 4;
UPDATE employee SET salary = 1700.00 WHERE emp_id = 5;

-- Update 10 employees
INSERT INTO employee (emp_name, dob, salary, dept_id) VALUES
                                                          ('Nguyễn Văn A', '1990-05-12', 1200.00, 1),
                                                          ('Trần Thị B', '1988-11-23', 1350.00, 2),
                                                          ('Lê Văn C', '1995-07-01', 1600.00, 3),
                                                          ('Phạm Thị D', '1992-03-15', 1450.00, 1),
                                                          ('Hoàng Văn E', '1985-09-30', 1700.00, 2),
                                                          ('Đặng Thị F', '1998-12-05', 1100.00, 3),
                                                          ('Vũ Văn G', '1993-06-18', 1550.00, 1),
                                                          ('Bùi Thị H', '1991-04-22', 1300.00, 2),
                                                          ('Đỗ Văn I', '1996-08-10', 1250.00, 3),
                                                          ('Ngô Thị J', '1989-02-28', 1400.00, 1);