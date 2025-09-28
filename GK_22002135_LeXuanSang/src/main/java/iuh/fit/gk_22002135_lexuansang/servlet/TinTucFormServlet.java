package iuh.fit.gk_22002135_lexuansang.servlet;

import iuh.fit.gk_22002135_lexuansang.dao.DanhMucDAO;
import iuh.fit.gk_22002135_lexuansang.model.DanhMuc;
import jakarta.annotation.Resource;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import javax.sql.DataSource;
import java.io.IOException;
import java.util.List;

@WebServlet("/tintuc/form")
public class TinTucFormServlet extends HttpServlet {
    @Resource(name = "jdbc/quanlydanhmuc")
    private DataSource ds;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        List<DanhMuc> danhMucList = new DanhMucDAO(ds).findAll();
        req.setAttribute("danhmuc", danhMucList);
        req.getRequestDispatcher("/tintuc-form.jsp").forward(req, resp);
    }
}