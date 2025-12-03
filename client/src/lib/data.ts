// Mock data for درمارُخ (DermaRokh) cosmetics store
// TODO: Remove mock data and connect to real API

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  color: string;
  productCount: number;
}

export interface Brand {
  id: string;
  name: string;
  nameEn: string;
  logo?: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  brandId: string;
  categoryId: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  rating: number;
  reviewCount: number;
  description: string;
  ingredients?: string;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const categories: Category[] = [
  { id: 'face-makeup', name: 'آرایش صورت', nameEn: 'Face Makeup', icon: 'face-makeup', color: '#FF6B9D', productCount: 45 },
  { id: 'eye-makeup', name: 'آرایش چشم', nameEn: 'Eye Makeup', icon: 'eye-makeup', color: '#FF6B9D', productCount: 38 },
  { id: 'eyebrow-makeup', name: 'آرایش ابرو', nameEn: 'Eyebrow', icon: 'eyebrow-makeup', color: '#FF6B9D', productCount: 22 },
  { id: 'lip-makeup', name: 'آرایش لب', nameEn: 'Lip Makeup', icon: 'lip-makeup', color: '#FF6B9D', productCount: 35 },
  { id: 'skincare', name: 'مراقبت پوست', nameEn: 'Skin Care', icon: 'skincare', color: '#A8D8EA', productCount: 52 },
  { id: 'haircare', name: 'مراقبت مو', nameEn: 'Hair Care', icon: 'haircare', color: '#FFD700', productCount: 28 },
  { id: 'perfume', name: 'عطر و ادکلن', nameEn: 'Perfume', icon: 'perfume', color: '#FFB6C1', productCount: 41 },
  { id: 'hygiene', name: 'بهداشتی', nameEn: 'Hygiene', icon: 'hygiene', color: '#90EE90', productCount: 33 },
];

export const brands: Brand[] = [
  { id: 'loreal', name: 'لورآل', nameEn: "L'Oréal" },
  { id: 'maybelline', name: 'میبلین', nameEn: 'Maybelline' },
  { id: 'mac', name: 'مک', nameEn: 'MAC' },
  { id: 'nyx', name: 'نیکس', nameEn: 'NYX' },
  { id: 'essence', name: 'اسنس', nameEn: 'Essence' },
  { id: 'flormar', name: 'فلورمار', nameEn: 'Flormar' },
  { id: 'bourjois', name: 'بورژوا', nameEn: 'Bourjois' },
  { id: 'revlon', name: 'رولون', nameEn: 'Revlon' },
  { id: 'nivea', name: 'نیوآ', nameEn: 'Nivea' },
  { id: 'neutrogena', name: 'نوتروژنا', nameEn: 'Neutrogena' },
  { id: 'cerave', name: 'سراوی', nameEn: 'CeraVe' },
  { id: 'larocheposay', name: 'لاروش پوزای', nameEn: 'La Roche-Posay' },
];

export const products: Product[] = [
  // Face Makeup
  { id: '1', name: 'کرم پودر مات لورآل', brand: 'لورآل', brandId: 'loreal', categoryId: 'face-makeup', price: 850000, originalPrice: 950000, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400', rating: 4.5, reviewCount: 128, description: 'کرم پودر با پوشش متوسط تا کامل، مناسب پوست‌های چرب و مختلط', ingredients: 'آب، سیکلوپنتاسیلوکسان، تالک، پودر نایلون', inStock: true, isNew: true },
  { id: '2', name: 'پرایمر صورت میبلین', brand: 'میبلین', brandId: 'maybelline', categoryId: 'face-makeup', price: 420000, image: 'https://images.unsplash.com/photo-1631730486784-5b3e3e7af3b2?w=400', rating: 4.2, reviewCount: 89, description: 'پرایمر سبک با بافت ژل‌گونه برای آماده‌سازی پوست', inStock: true },
  { id: '3', name: 'کانسیلر فول کاور مک', brand: 'مک', brandId: 'mac', categoryId: 'face-makeup', price: 1250000, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400', rating: 4.8, reviewCount: 245, description: 'کانسیلر با پوشش کامل و ماندگاری ۲۴ ساعته', inStock: true, isBestSeller: true },
  { id: '4', name: 'پودر فیکس اسنس', brand: 'اسنس', brandId: 'essence', categoryId: 'face-makeup', price: 180000, image: 'https://images.unsplash.com/photo-1599733589046-10c0b4a848a6?w=400', rating: 4.0, reviewCount: 67, description: 'پودر فیکساتور شفاف برای تثبیت آرایش', inStock: true },
  { id: '5', name: 'رژگونه کرمی فلورمار', brand: 'فلورمار', brandId: 'flormar', categoryId: 'face-makeup', price: 320000, originalPrice: 380000, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400', rating: 4.3, reviewCount: 92, description: 'رژگونه کرمی با رنگ طبیعی و شاداب', inStock: true },
  { id: '6', name: 'هایلایتر پودری نیکس', brand: 'نیکس', brandId: 'nyx', categoryId: 'face-makeup', price: 480000, image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=400', rating: 4.6, reviewCount: 156, description: 'هایلایتر درخشان برای نورپردازی صورت', inStock: true, isNew: true },
  
  // Eye Makeup
  { id: '7', name: 'پالت سایه چشم ۱۲ رنگ', brand: 'نیکس', brandId: 'nyx', categoryId: 'eye-makeup', price: 680000, image: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400', rating: 4.7, reviewCount: 312, description: 'پالت سایه با ۱۲ رنگ مات و شیمری', inStock: true, isBestSeller: true },
  { id: '8', name: 'ریمل حجم‌دهنده لورآل', brand: 'لورآل', brandId: 'loreal', categoryId: 'eye-makeup', price: 380000, image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400', rating: 4.4, reviewCount: 178, description: 'ریمل با فرمول ضدآب و حجم‌دهی فوق‌العاده', inStock: true },
  { id: '9', name: 'خط چشم ماژیکی میبلین', brand: 'میبلین', brandId: 'maybelline', categoryId: 'eye-makeup', price: 290000, image: 'https://images.unsplash.com/photo-1617220379175-68eb0f80fa9d?w=400', rating: 4.5, reviewCount: 203, description: 'خط چشم با نوک نمدی و رنگ مشکی مات', inStock: true },
  { id: '10', name: 'سایه چشم تکی مک', brand: 'مک', brandId: 'mac', categoryId: 'eye-makeup', price: 520000, image: 'https://images.unsplash.com/photo-1560713781-d00f6c18f388?w=400', rating: 4.8, reviewCount: 145, description: 'سایه چشم با پیگمنت قوی و ماندگاری بالا', inStock: true },
  { id: '11', name: 'مژه مصنوعی طبیعی', brand: 'اسنس', brandId: 'essence', categoryId: 'eye-makeup', price: 85000, image: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?w=400', rating: 4.1, reviewCount: 89, description: 'مژه مصنوعی با ظاهر طبیعی و سبک', inStock: true },
  
  // Eyebrow
  { id: '12', name: 'مداد ابرو دوسر', brand: 'فلورمار', brandId: 'flormar', categoryId: 'eyebrow-makeup', price: 175000, image: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?w=400', rating: 4.3, reviewCount: 134, description: 'مداد ابرو با یک سر نرم و یک سر سفت', inStock: true },
  { id: '13', name: 'ژل ابرو نیکس', brand: 'نیکس', brandId: 'nyx', categoryId: 'eyebrow-makeup', price: 340000, image: 'https://images.unsplash.com/photo-1596704017254-9759879d8c9e?w=400', rating: 4.5, reviewCount: 98, description: 'ژل ابرو با رنگ‌دهی خفیف و تثبیت قوی', inStock: true, isNew: true },
  { id: '14', name: 'پودر ابرو میبلین', brand: 'میبلین', brandId: 'maybelline', categoryId: 'eyebrow-makeup', price: 280000, image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400', rating: 4.2, reviewCount: 76, description: 'پودر ابرو همراه با قلم‌مو و آینه', inStock: true },
  
  // Lip Makeup
  { id: '15', name: 'رژ لب مات مک', brand: 'مک', brandId: 'mac', categoryId: 'lip-makeup', price: 890000, originalPrice: 980000, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400', rating: 4.9, reviewCount: 456, description: 'رژ لب مات افسانه‌ای با رنگ‌های کلاسیک', inStock: true, isBestSeller: true },
  { id: '16', name: 'تینت لب کره‌ای', brand: 'اسنس', brandId: 'essence', categoryId: 'lip-makeup', price: 145000, image: 'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5b?w=400', rating: 4.4, reviewCount: 189, description: 'تینت لب با فینیش طبیعی و آبرسان', inStock: true },
  { id: '17', name: 'لیپ گلاس براق لورآل', brand: 'لورآل', brandId: 'loreal', categoryId: 'lip-makeup', price: 360000, image: 'https://images.unsplash.com/photo-1558864559-ed673ba3610b?w=400', rating: 4.3, reviewCount: 112, description: 'لیپ گلاس با درخشش فوق‌العاده', inStock: true },
  { id: '18', name: 'خط لب نیکس', brand: 'نیکس', brandId: 'nyx', categoryId: 'lip-makeup', price: 195000, image: 'https://images.unsplash.com/photo-1609081524880-c07767d15a07?w=400', rating: 4.2, reviewCount: 87, description: 'خط لب کرمی با رنگ‌دهی عالی', inStock: true },
  { id: '19', name: 'بالم لب مرطوب‌کننده', brand: 'نیوآ', brandId: 'nivea', categoryId: 'lip-makeup', price: 95000, image: 'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?w=400', rating: 4.6, reviewCount: 234, description: 'بالم لب با SPF و مرطوب‌کننده قوی', inStock: true },
  
  // Skincare
  { id: '20', name: 'سرم ویتامین C لاروش پوزای', brand: 'لاروش پوزای', brandId: 'larocheposay', categoryId: 'skincare', price: 1850000, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400', rating: 4.8, reviewCount: 367, description: 'سرم روشن‌کننده با ۱۰٪ ویتامین C خالص', inStock: true, isBestSeller: true },
  { id: '21', name: 'کرم مرطوب‌کننده سراوی', brand: 'سراوی', brandId: 'cerave', categoryId: 'skincare', price: 720000, image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400', rating: 4.7, reviewCount: 289, description: 'کرم مرطوب‌کننده با سرامید برای پوست خشک', inStock: true },
  { id: '22', name: 'ژل شست‌وشوی صورت نوتروژنا', brand: 'نوتروژنا', brandId: 'neutrogena', categoryId: 'skincare', price: 380000, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400', rating: 4.5, reviewCount: 198, description: 'ژل شست‌وشو بدون صابون برای پوست چرب', inStock: true },
  { id: '23', name: 'ماسک صورت هیالورونیک', brand: 'لورآل', brandId: 'loreal', categoryId: 'skincare', price: 280000, image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400', rating: 4.4, reviewCount: 145, description: 'ماسک ورقه‌ای با هیالورونیک اسید', inStock: true, isNew: true },
  { id: '24', name: 'ضد آفتاب SPF50 نیوآ', brand: 'نیوآ', brandId: 'nivea', categoryId: 'skincare', price: 420000, originalPrice: 490000, image: 'https://images.unsplash.com/photo-1556227834-09f1de7a7d14?w=400', rating: 4.3, reviewCount: 178, description: 'ضد آفتاب سبک با SPF50 و PA+++', inStock: true },
  { id: '25', name: 'تونر پاک‌کننده', brand: 'نوتروژنا', brandId: 'neutrogena', categoryId: 'skincare', price: 320000, image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400', rating: 4.2, reviewCount: 112, description: 'تونر پاک‌کننده بدون الکل', inStock: true },
  
  // Hair Care
  { id: '26', name: 'شامپو ترمیم‌کننده لورآل', brand: 'لورآل', brandId: 'loreal', categoryId: 'haircare', price: 480000, image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400', rating: 4.6, reviewCount: 234, description: 'شامپو مخصوص موهای آسیب‌دیده', inStock: true, isBestSeller: true },
  { id: '27', name: 'ماسک مو کراتینه', brand: 'لورآل', brandId: 'loreal', categoryId: 'haircare', price: 580000, image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400', rating: 4.7, reviewCount: 189, description: 'ماسک مو با کراتین طبیعی', inStock: true },
  { id: '28', name: 'روغن آرگان', brand: 'میبلین', brandId: 'maybelline', categoryId: 'haircare', price: 390000, image: 'https://images.unsplash.com/photo-1597354984706-fac992d9306f?w=400', rating: 4.5, reviewCount: 156, description: 'روغن آرگان خالص برای تقویت مو', inStock: true, isNew: true },
  { id: '29', name: 'نرم‌کننده موی فر', brand: 'نیوآ', brandId: 'nivea', categoryId: 'haircare', price: 340000, image: 'https://images.unsplash.com/photo-1594125311687-3b1b3eefa9f2?w=400', rating: 4.3, reviewCount: 98, description: 'نرم‌کننده مخصوص موهای فر و مجعد', inStock: true },
  
  // Perfume
  { id: '30', name: 'ادوپرفیوم گل رز', brand: 'بورژوا', brandId: 'bourjois', categoryId: 'perfume', price: 1450000, originalPrice: 1650000, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400', rating: 4.8, reviewCount: 278, description: 'عطر زنانه با رایحه گل رز و مشک', inStock: true, isBestSeller: true },
  { id: '31', name: 'ادکلن تابستانی', brand: 'رولون', brandId: 'revlon', categoryId: 'perfume', price: 890000, image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400', rating: 4.5, reviewCount: 167, description: 'ادکلن سبک با رایحه مرکبات', inStock: true },
  { id: '32', name: 'عطر جیبی وانیل', brand: 'اسنس', brandId: 'essence', categoryId: 'perfume', price: 195000, image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400', rating: 4.2, reviewCount: 89, description: 'عطر جیبی شیرین با رایحه وانیل', inStock: true },
  { id: '33', name: 'مست پرفیوم ۱۰۰ میل', brand: 'لورآل', brandId: 'loreal', categoryId: 'perfume', price: 680000, image: 'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=400', rating: 4.4, reviewCount: 134, description: 'مست خوش‌بو با ماندگاری طولانی', inStock: true, isNew: true },
  
  // Hygiene
  { id: '34', name: 'صابون آنتی‌باکتریال', brand: 'نیوآ', brandId: 'nivea', categoryId: 'hygiene', price: 85000, image: 'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=400', rating: 4.3, reviewCount: 245, description: 'صابون ضدباکتری با رایحه ملایم', inStock: true },
  { id: '35', name: 'دئودورانت ۴۸ ساعته', brand: 'نیوآ', brandId: 'nivea', categoryId: 'hygiene', price: 145000, image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400', rating: 4.5, reviewCount: 312, description: 'دئودورانت با محافظت ۴۸ ساعته', inStock: true, isBestSeller: true },
  { id: '36', name: 'لوسیون بدن مرطوب‌کننده', brand: 'نیوآ', brandId: 'nivea', categoryId: 'hygiene', price: 280000, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400', rating: 4.6, reviewCount: 198, description: 'لوسیون بدن برای پوست خشک', inStock: true },
  { id: '37', name: 'شامپو بدن گل یاس', brand: 'رولون', brandId: 'revlon', categoryId: 'hygiene', price: 195000, image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400', rating: 4.2, reviewCount: 123, description: 'شامپو بدن با رایحه گل یاس', inStock: true },
  { id: '38', name: 'کرم دست و ناخن', brand: 'نوتروژنا', brandId: 'neutrogena', categoryId: 'hygiene', price: 165000, image: 'https://images.unsplash.com/photo-1598662779094-110c2bad80b5?w=400', rating: 4.4, reviewCount: 87, description: 'کرم مرطوب‌کننده دست و ناخن', inStock: true, isNew: true },
  
  // More products
  { id: '39', name: 'اسپری فیکساتور آرایش', brand: 'نیکس', brandId: 'nyx', categoryId: 'face-makeup', price: 420000, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400', rating: 4.6, reviewCount: 178, description: 'اسپری تثبیت‌کننده آرایش با ماندگاری بالا', inStock: true },
  { id: '40', name: 'کرم ضد چروک شب', brand: 'لاروش پوزای', brandId: 'larocheposay', categoryId: 'skincare', price: 1650000, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=400', rating: 4.8, reviewCount: 234, description: 'کرم شب ضد پیری با رتینول', inStock: true },
  { id: '41', name: 'سرم مژه رشد', brand: 'فلورمار', brandId: 'flormar', categoryId: 'eye-makeup', price: 380000, image: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?w=400', rating: 4.3, reviewCount: 145, description: 'سرم تقویت‌کننده رشد مژه', inStock: true },
  { id: '42', name: 'رژ لب مایع میبلین', brand: 'میبلین', brandId: 'maybelline', categoryId: 'lip-makeup', price: 295000, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400', rating: 4.5, reviewCount: 267, description: 'رژ لب مایع مات با ماندگاری ۱۶ ساعت', inStock: true, isBestSeller: true },
  { id: '43', name: 'شامپو ضد شوره', brand: 'نوتروژنا', brandId: 'neutrogena', categoryId: 'haircare', price: 520000, image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400', rating: 4.4, reviewCount: 189, description: 'شامپو درمان‌کننده شوره سر', inStock: true },
  { id: '44', name: 'کرم BB چند کاره', brand: 'لورآل', brandId: 'loreal', categoryId: 'face-makeup', price: 580000, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400', rating: 4.5, reviewCount: 198, description: 'کرم BB با SPF و پوشش متوسط', inStock: true },
  { id: '45', name: 'سایه مایع شیمری', brand: 'اسنس', brandId: 'essence', categoryId: 'eye-makeup', price: 125000, image: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400', rating: 4.2, reviewCount: 98, description: 'سایه مایع با درخشش ظریف', inStock: true },
  { id: '46', name: 'ادوتوالت گل بهار', brand: 'رولون', brandId: 'revlon', categoryId: 'perfume', price: 720000, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400', rating: 4.3, reviewCount: 134, description: 'ادوتوالت با رایحه گل‌های بهاری', inStock: true },
  { id: '47', name: 'ماسک لب شبانه', brand: 'لورآل', brandId: 'loreal', categoryId: 'lip-makeup', price: 245000, image: 'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?w=400', rating: 4.6, reviewCount: 156, description: 'ماسک لب برای ترمیم شبانه', inStock: true, isNew: true },
  { id: '48', name: 'اسکراب صورت', brand: 'سراوی', brandId: 'cerave', categoryId: 'skincare', price: 480000, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400', rating: 4.4, reviewCount: 167, description: 'اسکراب ملایم برای پاکسازی پوست', inStock: true },
  { id: '49', name: 'پاک‌کننده آرایش چشم', brand: 'نیوآ', brandId: 'nivea', categoryId: 'skincare', price: 195000, image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400', rating: 4.5, reviewCount: 223, description: 'پاک‌کننده ملایم آرایش ضدآب چشم', inStock: true },
  { id: '50', name: 'کانتور پالت ۶ رنگ', brand: 'نیکس', brandId: 'nyx', categoryId: 'face-makeup', price: 580000, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400', rating: 4.7, reviewCount: 189, description: 'پالت کانتور و هایلایت ۶ رنگ', inStock: true, isBestSeller: true },
];

export const mockReviews: Review[] = [
  { id: '1', userName: 'سارا م.', rating: 5, comment: 'محصول فوق‌العاده‌ای بود! کیفیت عالی و ارسال سریع.', date: '۱۴۰۳/۰۹/۱۵', verified: true, helpful: 12 },
  { id: '2', userName: 'مریم ر.', rating: 4, comment: 'رنگش دقیقا همون چیزی بود که می‌خواستم. فقط بسته‌بندی می‌تونست بهتر باشه.', date: '۱۴۰۳/۰۹/۱۰', verified: true, helpful: 8 },
  { id: '3', userName: 'نگار ح.', rating: 5, comment: 'ماندگاری خیلی خوبی داره. حتما دوباره می‌خرم.', date: '۱۴۰۳/۰۹/۰۵', verified: false, helpful: 5 },
  { id: '4', userName: 'فاطمه ک.', rating: 3, comment: 'محصول خوبیه ولی قیمتش یکم بالاست.', date: '۱۴۰۳/۰۸/۲۸', verified: true, helpful: 3 },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
}

export function getCategoryColor(categoryId: string): string {
  const category = categories.find(c => c.id === categoryId);
  return category?.color || '#FF6B9D';
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.categoryId === categoryId);
}

export function getBestSellers(): Product[] {
  return products.filter(p => p.isBestSeller);
}

export function getNewArrivals(): Product[] {
  return products.filter(p => p.isNew);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.brand.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery)
  );
}
