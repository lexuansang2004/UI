<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<html>
<head>
    <title>Giỏ hàng</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"/>
</head>
<body class="container mt-5">
<h2>Giỏ hàng</h2>

<c:if test="${empty sessionScope.cart}">
    <p>Giỏ hàng trống.</p>
</c:if>

<c:forEach var="t" items="${sessionScope.cart}">
    <div class="card mb-3 p-3">
        <h4>${t.tieuDe}</h4>
        <p>${t.noiDung}</p>
        <p><strong>Giá:</strong> ${t.gia} VNĐ</p>
        <form method="post" action="${pageContext.request.contextPath}/cart/remove">
            <input type="hidden" name="maTT" value="${t.maTT}" />
            <button type="submit" class="btn btn-sm btn-danger">Xóa khỏi giỏ</button>
        </form>
    </div>
</c:forEach>

<c:if test="${not empty sessionScope.cart}">
    <form method="post" action="${pageContext.request.contextPath}/cart/checkout">
        <button type="submit" class="btn btn-success">Thanh toán</button>
    </form>
</c:if>

<a href="${pageContext.request.contextPath}/tintuc" class="btn btn-secondary mt-3">Quay lại</a>
<c:if test="${param.success == '1'}">
    <div class="alert alert-success">Thanh toán thành công!</div>
</c:if>
</body>
</html>