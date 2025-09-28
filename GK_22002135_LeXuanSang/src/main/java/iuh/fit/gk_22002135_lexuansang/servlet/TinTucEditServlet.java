package iuh.fit.gk_22002135_lexuansang.servlet;

import iuh.fit.gk_22002135_lexuansang.dao.DanhMucDAO;
import iuh.fit.gk_22002135_lexuansang.dao.TinTucDAO;
import iuh.fit.gk_22002135_lexuansang.model.DanhMuc;
import iuh.fit.gk_22002135_lexuansang.model.TinTuc;
import jakarta.annotation.Resource;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import javax.sql.DataSource;
import java.io.IOException;
import java.util.List;

@WebServlet("/tintuc/edit")
public class TinTucEditServlet extends HttpServlet {
    @Resource(name = "jdbc/quanlydanhmuc")
    private DataSource ds;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        int id = Integer.parseInt(req.getParameter("id"));
        TinTucDAO tinTucDAO = new TinTucDAO(ds);
        DanhMucDAO danhMucDAO = new DanhMucDAO(ds);

        TinTuc tin = tinTucDAO.findById(id);
        List<DanhMuc> danhMucList = danhMucDAO.findAll();

        req.setAttribute("tin", tin);
        req.setAttribute("danhmuc", danhMucList);
        req.getRequestDispatcher("/tintuc-edit.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");

        try {
            int maTT = Integer.parseInt(req.getParameter("id"));
            String tieude = req.getParameter("tieude");
            String noidung = req.getParameter("noidung");
            String lienket = req.getParameter("lienket");
            int maDM = Integer.parseInt(req.getParameter("madm"));
            double gia = Double.parseDouble(req.getParameter("gia"));

            DanhMuc dm = new DanhMuc(maDM, null, null, null);
            TinTuc tin = new TinTuc(maTT, tieude, noidung, lienket, dm, gia);

            new TinTucDAO(ds).update(tin);
            resp.sendRedirect(req.getContextPath() + "/tintuc");
        } catch (Exception e) {
            e.printStackTrace();
            resp.sendRedirect(req.getContextPath() + "/tintuc/edit?id=" + req.getParameter("id") + "&error=1");
        }
    }
}