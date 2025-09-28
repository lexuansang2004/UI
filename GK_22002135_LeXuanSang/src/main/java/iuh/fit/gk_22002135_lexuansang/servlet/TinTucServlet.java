package iuh.fit.gk_22002135_lexuansang.servlet;

import iuh.fit.gk_22002135_lexuansang.dao.DanhMucDAO;
import iuh.fit.gk_22002135_lexuansang.dao.TinTucDAO;
import iuh.fit.gk_22002135_lexuansang.model.DanhMuc;
import iuh.fit.gk_22002135_lexuansang.model.TinTuc;
import jakarta.annotation.Resource;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import javax.sql.DataSource;
import java.io.IOException;
import java.util.List;

@WebServlet({"/tintuc", "/tintuc/delete", "/tintuc/save"})
public class TinTucServlet extends HttpServlet {
    @Resource(name = "jdbc/quanlydanhmuc")
    private DataSource ds;
    private TinTucDAO dao;

    @Override
    public void init() {
        dao = new TinTucDAO(ds);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String path = req.getServletPath();

        if ("/tintuc/delete".equals(path)) {
            int id = Integer.parseInt(req.getParameter("id"));
            dao.delete(id);
            resp.sendRedirect(req.getContextPath() + "/tintuc");
            return;
        }

        // Hiển thị danh sách tin tức (có thể lọc theo từ khóa hoặc danh mục)
        String keyword = req.getParameter("keyword");
        String maDM = req.getParameter("maDM");

        List<TinTuc> list;

        if (keyword != null && !keyword.isBlank()) {
            list = dao.findByKeyword(keyword);
        } else if (maDM != null && !maDM.isBlank()) {
            list = dao.findByDanhMuc(Integer.parseInt(maDM));
        } else {
            list = dao.findAll();
        }

        req.setAttribute("tintuc", list);
        req.getRequestDispatcher("/danhsach-tintuc.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");

        try {
            String tieude = req.getParameter("tieude");
            String noidung = req.getParameter("noiDung");
            String lienket = req.getParameter("lienket");
            int maDM = Integer.parseInt(req.getParameter("madm"));
            double gia = Double.parseDouble(req.getParameter("gia"));

            boolean invalid = tieude == null || tieude.isBlank()
                    || lienket == null || lienket.isBlank()
                    || !(lienket.startsWith("http://") || lienket.startsWith("https://"))
                    || noidung != null && noidung.length() > 255;

            if (invalid) {
                resp.sendRedirect(req.getContextPath() + "/tintuc-form.jsp?error=1");
                return;
            }

            DanhMuc dm = new DanhMuc(maDM, null, null, null);
            TinTuc tin = new TinTuc(0, tieude, noidung, lienket, dm, gia);
            dao.insert(tin);
            resp.sendRedirect(req.getContextPath() + "/tintuc");
        } catch (Exception e) {
            e.printStackTrace();
            resp.sendRedirect(req.getContextPath() + "/tintuc-form.jsp?error=1");
        }
    }
}