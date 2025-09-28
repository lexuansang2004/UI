package iuh.fit.gk_22002135_lexuansang.dao;

import iuh.fit.gk_22002135_lexuansang.model.DanhMuc;
import iuh.fit.gk_22002135_lexuansang.model.TinTuc;
import iuh.fit.gk_22002135_lexuansang.util.DBUtil;

import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class TinTucDAO {
    private final DBUtil db;

    public TinTucDAO(DataSource ds) {
        db = new DBUtil(ds);
    }

    // Lấy toàn bộ tin tức
    public List<TinTuc> findAll() {
        List<TinTuc> list = new ArrayList<>();
        String sql = "SELECT tt.*, dm.maDM, dm.tenDM, dm.nguoiQuanLy, dm.ghiChu " +
                "FROM TinTuc tt JOIN DanhMuc dm ON tt.maDM = dm.maDM";
        try (Connection c = db.getConnection();
             Statement st = c.createStatement();
             ResultSet rs = st.executeQuery(sql)) {

            while (rs.next()) {
                DanhMuc dm = new DanhMuc(
                        rs.getInt("maDM"),
                        rs.getString("tenDM"),
                        rs.getString("nguoiQuanLy"),
                        rs.getString("ghiChu")
                );
                TinTuc t = new TinTuc(
                        rs.getInt("maTT"),
                        rs.getString("tieuDe"),
                        rs.getString("noiDung"),
                        rs.getString("lienKet"),
                        dm,
                        rs.getDouble("gia")
                );
                list.add(t);
            }
        } catch (SQLException e) {
            System.err.println("Lỗi khi lấy danh sách tin tức:");
            e.printStackTrace();
        }
        return list;
    }

    // Tìm theo từ khóa
    public List<TinTuc> findByKeyword(String keyword) {
        List<TinTuc> list = new ArrayList<>();
        String sql = "SELECT tt.*, dm.maDM, dm.tenDM, dm.nguoiQuanLy, dm.ghiChu " +
                "FROM TinTuc tt JOIN DanhMuc dm ON tt.maDM = dm.maDM " +
                "WHERE tt.tieuDe LIKE ?";
        try (Connection c = db.getConnection();
             PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setString(1, "%" + keyword + "%");
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    DanhMuc dm = new DanhMuc(
                            rs.getInt("maDM"),
                            rs.getString("tenDM"),
                            rs.getString("nguoiQuanLy"),
                            rs.getString("ghiChu")
                    );
                    TinTuc t = new TinTuc(
                            rs.getInt("maTT"),
                            rs.getString("tieuDe"),
                            rs.getString("noiDung"),
                            rs.getString("lienKet"),
                            dm,
                            rs.getDouble("gia")
                    );
                    list.add(t);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    // Lấy theo danh mục
    public List<TinTuc> findByDanhMuc(int maDM) {
        List<TinTuc> list = new ArrayList<>();
        String sql = "SELECT tt.*, dm.maDM, dm.tenDM, dm.nguoiQuanLy, dm.ghiChu " +
                "FROM TinTuc tt JOIN DanhMuc dm ON tt.maDM = dm.maDM WHERE dm.maDM = ?";
        try (Connection c = db.getConnection();
             PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setInt(1, maDM);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    DanhMuc dm = new DanhMuc(
                            rs.getInt("maDM"),
                            rs.getString("tenDM"),
                            rs.getString("nguoiQuanLy"),
                            rs.getString("ghiChu")
                    );
                    TinTuc t = new TinTuc(
                            rs.getInt("maTT"),
                            rs.getString("tieuDe"),
                            rs.getString("noiDung"),
                            rs.getString("lienKet"),
                            dm,
                            rs.getDouble("gia")
                    );
                    list.add(t);
                }
            }
        } catch (SQLException e) {
            System.err.println("Lỗi khi lấy tin theo danh mục:");
            e.printStackTrace();
        }
        return list;
    }

    // Lấy theo mã tin
    public TinTuc findById(int maTT) {
        String sql = "SELECT tt.*, dm.maDM, dm.tenDM, dm.nguoiQuanLy, dm.ghiChu " +
                "FROM TinTuc tt JOIN DanhMuc dm ON tt.maDM = dm.maDM WHERE tt.maTT = ?";
        try (Connection c = db.getConnection();
             PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setInt(1, maTT);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    DanhMuc dm = new DanhMuc(
                            rs.getInt("maDM"),
                            rs.getString("tenDM"),
                            rs.getString("nguoiQuanLy"),
                            rs.getString("ghiChu")
                    );
                    return new TinTuc(
                            rs.getInt("maTT"),
                            rs.getString("tieuDe"),
                            rs.getString("noiDung"),
                            rs.getString("lienKet"),
                            dm,
                            rs.getDouble("gia")
                    );
                }
            }
        } catch (SQLException e) {
            System.err.println("Lỗi khi lấy tin theo mã:");
            e.printStackTrace();
        }
        return null;
    }

    // Thêm tin tức
    public void insert(TinTuc t) {
        String sql = "INSERT INTO TinTuc(tieuDe, noiDung, lienKet, maDM, gia) VALUES (?, ?, ?, ?, ?)";
        try (Connection c = db.getConnection();
             PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setString(1, t.getTieuDe());
            ps.setString(2, t.getNoiDung());
            ps.setString(3, t.getLienKet());
            ps.setInt(4, t.getDanhMuc().getMaDM());
            ps.setDouble(5, t.getGia());
            ps.executeUpdate();
        } catch (SQLException e) {
            System.err.println("Lỗi khi thêm tin tức:");
            e.printStackTrace();
        }
    }

    // Cập nhật tin tức
    public void update(TinTuc t) {
        String sql = "UPDATE TinTuc SET tieuDe = ?, noiDung = ?, lienKet = ?, maDM = ?, gia = ? WHERE maTT = ?";
        try (Connection c = db.getConnection();
             PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setString(1, t.getTieuDe());
            ps.setString(2, t.getNoiDung());
            ps.setString(3, t.getLienKet());
            ps.setInt(4, t.getDanhMuc().getMaDM());
            ps.setDouble(5, t.getGia());
            ps.setInt(6, t.getMaTT());
            ps.executeUpdate();
        } catch (SQLException e) {
            System.err.println("Lỗi khi cập nhật tin tức:");
            e.printStackTrace();
        }
    }

    // Xóa tin tức
    public void delete(int maTT) {
        String sql = "DELETE FROM TinTuc WHERE maTT = ?";
        try (Connection c = db.getConnection();
             PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setInt(1, maTT);
            ps.executeUpdate();
        } catch (SQLException e) {
            System.err.println("Lỗi khi xóa tin tức:");
            e.printStackTrace();
        }
    }
}