export type ColorName =
  | 'Pink'
  | 'Black'
  | 'Blue'
  | 'Silver'
  | 'Red'
  | 'Milky'
  | 'Orange';

export interface KeyFeatureSpec {
  primary: string;
  detail: string;
}

export interface ProductVariant {
  id: string; // slug, dùng làm React key / query param
  colorName: ColorName;
  colorHex: string;
  image: string;
}

export interface KeyFeature {
  id: string;
  title: string;
  detail: string;
  image: string;
}

export interface SpecItem {
  title: string;
  details: string;
}

export interface SwitchSpec {
  id: string;
  name: string;
  brand: string;
  axis: string;
  upperCover: string;
  bottomShell: string;
  springLength: string; // vd: "21mm"
  actuationForce: string; // vd: "45g"
  travelDistance: string; // vd: "3.6mm"
  imageUrl: string;
  note?: string; // ghi chú riêng, vd dung lượng pin khác biệt
}
