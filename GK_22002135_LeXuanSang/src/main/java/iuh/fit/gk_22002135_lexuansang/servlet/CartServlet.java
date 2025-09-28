package iuh.fit.gk_22002135_lexuansang.servlet;

import iuh.fit.gk_22002135_lexuansang.dao.TinTucDAO;
import iuh.fit.gk_22002135_lexuansang.model.TinTuc;
import jakarta.annotation.Resource;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import javax.sql.DataSource;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet({"/cart", "/cart/add", "/cart/remove", "/cart/checkout"})
public class CartServlet extends HttpServlet {
    @Resource(name = "jdbc/quanlydanhmuc")
    private DataSource ds;

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        HttpSession session = req.getSession();
        List<TinTuc> cart = (List<TinTuc>) session.getAttribute("cart");
        if (cart == null) cart = new ArrayList<>();

        String path = req.getServletPath();
        String maTTRaw = req.getParameter("maTT");

        // Nếu là checkout thì không cần maTT
        if ("/cart/checkout".equals(path)) {
            cart.clear();
            session.setAttribute("cart", cart);
            resp.sendRedirect(req.getContextPath() + "/cart?success=1");
            return;
        }

        // Kiểm tra maTT hợp lệ
        if (maTTRaw == null || maTTRaw.isBlank()) {
            resp.sendRedirect(req.getContextPath() + "/cart?error=missing");
            return;
        }

        int maTT;
        try {
            maTT = Integer.parseInt(maTTRaw);
        } catch (NumberFormatException e) {
            resp.sendRedirect(req.getContextPath() + "/cart?error=invalid");
            return;
        }

        TinTuc tin = new TinTucDAO(ds).findById(maTT);
        if (tin == null) {
            resp.sendRedirect(req.getContextPath() + "/cart?error=notfound");
            return;
        }

        if ("/cart/add".equals(path)) {
            cart.add(tin);
        } else if ("/cart/remove".equals(path)) {
            cart.removeIf(t -> t.getMaTT() == maTT);
        }

        session.setAttribute("cart", cart);
        resp.sendRedirect(req.getContextPath() + "/cart");
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        req.getRequestDispatcher("/cart.jsp").forward(req, resp);
    }
}