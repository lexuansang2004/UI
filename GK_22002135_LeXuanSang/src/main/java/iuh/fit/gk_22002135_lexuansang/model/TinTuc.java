package iuh.fit.gk_22002135_lexuansang.model;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TinTuc {
    private int maTT;
    private String tieuDe, noiDung, lienKet;
    private DanhMuc danhMuc;
    private double gia;


}
