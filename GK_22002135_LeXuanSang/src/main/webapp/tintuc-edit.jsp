<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<html>
<head>
  <title>Sửa tin tức</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"/>
</head>
<body class="container mt-5">
<c:if test="${param.error == '1'}">
  <div class="alert alert-danger">Cập nhật thất bại. Vui lòng kiểm tra lại dữ liệu.</div>
</c:if>
<h2>Sửa tin tức</h2>
<form method="post" action="${pageContext.request.contextPath}/tintuc/edit">
  <input type="hidden" name="id" value="${tin.maTT}"/>
  <div class="mb-3">
    <label>Tiêu đề:</label>
    <input name="tieude" class="form-control" value="${tin.tieuDe}" required/>
  </div>
  <div class="mb-3">
    <label>Nội dung:</label>
    <textarea name="noidung" class="form-control" maxlength="255">${tin.noiDung}</textarea>
  </div>
  <div class="mb-3">
    <label>Liên kết:</label>
    <input name="lienket" class="form-control" value="${tin.lienKet}" required/>
  </div>
  <div class="mb-3">
    <label>Danh mục:</label>
    <select name="madm" class="form-select" required>
      <c:forEach var="dm" items="${danhmuc}">
        <option value="${dm.maDM}" ${dm.maDM == tin.danhMuc.maDM ? 'selected' : ''}>${dm.tenDM}</option>
      </c:forEach>
    </select>
  </div>
  <div class="mb-3">
    <label>Giá:</label>
    <input name="gia" class="form-control" type="number" step="0.01" value="${tin.gia}" required/>
  </div>
  <button type="submit" class="btn btn-success">Lưu</button>
  <a href="${pageContext.request.contextPath}/tintuc" class="btn btn-secondary">Quay lại</a>
</form>
</body>
</html>