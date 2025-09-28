package iuh.fit.gk_22002135_lexuansang.dao;

import iuh.fit.gk_22002135_lexuansang.model.DanhMuc;
import iuh.fit.gk_22002135_lexuansang.util.DBUtil;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class DanhMucDAO {
    private final DBUtil db;

    public DanhMucDAO(DataSource ds) {
        db = new DBUtil(ds);
    }

    public List<DanhMuc> findAll() {
        List<DanhMuc> list = new ArrayList<>();
        String sql = "SELECT * FROM DanhMuc";
        try (Connection c = db.getConnection();
             Statement st = c.createStatement();
             ResultSet rs = st.executeQuery(sql)) {
            while (rs.next()) {
                list.add(new DanhMuc(
                        rs.getInt("maDM"),
                        rs.getString("tenDM"),
                        rs.getString("nguoiQuanLy"),
                        rs.getString("ghiChu")
                ));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
}
