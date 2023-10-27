import { Brush, Contact2, MapPin, Plane, Settings } from 'lucide-react'

export const MenuItems = [
  {
    label: 'Tours',
    icon: Plane,
    href: '/admin/dashboard/tour',
    subMenu: [
      {
        label: 'Tours List',
        href: '/admin/dashboard/tour',
        button: {
          label: 'Create new',
          type: 'link',
          href: '/admin/dashboard/tour/create-new',
        },
      },
      {
        label: 'Tour Types',
        href: '/admin/dashboard/tour/types',
        button: {
          label: 'Create new',
          type: 'trigger',
          href: 'onOpenTourType',
        },
      },
      {
        label: 'Tour Hotels',
        href: '/admin/dashboard/tour/hotels',
        button: {
          label: 'Create new',
          type: 'trigger',
          href: 'onHotelCreate',
        },
      },
    ],
  },
  {
    label: 'Destination',
    icon: MapPin,
    href: '/admin/dashboard/destination',
  },
  {
    label: 'Customers',
    icon: Contact2,
    href: '/admin/dashboard/customer',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/admin/dashboard/setting',
    subMenu: [
      {
        label: 'Home Setting',
        href: '/admin/dashboard/setting',
        button: {
          label: 'Create new',
          type: 'link',
          href: '/admin/dashboard/setting/create-new',
        },
      },
      {
        label: 'Visa Setting',
        href: '/admin/dashboard/setting/visa',
        button: {
          label: 'Create new',
          type: 'link',
          href: '/admin/dashboard/setting/visa/create-new',
        },
      },
      {
        label: 'FAQ Setting',
        href: '/admin/dashboard/setting/faq',
        button: {
          label: 'Create new',
          type: 'link',
          href: '/admin/dashboard/setting/faq/create-new',
        },
      },
      {
        label: 'Best Tours Settings',
        href: '/admin/dashboard/setting/best-tours',
      },
    ],
  },
]

export const COUNTRIES = [
  { label: 'المانيا', countryCode: 'DE' },
  { label: 'النمسا', countryCode: 'AT' },
  { label: 'سويسرا', countryCode: 'CH' },
  { label: 'ايطاليا', countryCode: 'IT' },
  { label: 'فرنسا', countryCode: 'FR' },
  { label: 'التشيك', countryCode: 'CZ' },
  { label: 'بريطانيا', countryCode: 'GB' },
  { label: 'هولندا', countryCode: 'NL' },
  { label: 'تركيا', countryCode: 'TR' },
  { label: 'النرويج', countryCode: 'NO' },
  { label: 'اسبانيا', countryCode: 'ES' },
  { label: 'البوسنة والهرسك', countryCode: 'BA' },
  { label: 'المجر', countryCode: 'HU' },
  { label: 'تونس', countryCode: 'TN' },
  { label: 'بلجيكيا', countryCode: 'BE' },
  { label: 'الدنمارك', countryCode: 'DK' },
  { label: 'البرتغال', countryCode: 'PT' },
  { label: 'السويد', countryCode: 'SE' },
  { label: 'فيلندا', countryCode: 'FI' },
  { label: 'استونيا', countryCode: 'EE' },
  { label: 'اليونان', countryCode: 'GR' },
  { label: 'سكوتلندا', countryCode: 'GB' },
  { label: 'ايرلندا', countryCode: 'IE' },
  { label: 'اندونيسيا', countryCode: 'ID' },
  { label: 'ماليزيا', countryCode: 'MY' },
  { label: 'سيرلنكا', countryCode: 'LK' },
  { label: 'المالديف', countryCode: 'MV' },
  { label: 'مالطا', countryCode: 'MT' },
  { label: 'كرواتيا', countryCode: 'HR' },
  { label: 'تايلند', countryCode: 'TH' },
  { label: 'اذربيجان', countryCode: 'AZ' },
  { label: 'جورجيا', countryCode: 'GE' },
  { label: 'اليابان', countryCode: 'JP' },
  { label: 'كوريا الجنوبية', countryCode: 'KR' },
  { label: 'الصين', countryCode: 'CN' },
  { label: 'روسيا', countryCode: 'RU' },
  { label: 'الهند', countryCode: 'IN' },
  { label: 'البرازيل', countryCode: 'BR' },
  { label: 'كندا', countryCode: 'CA' },
  { label: 'الولايات المتحدة', countryCode: 'US' },
  { label: 'كوبا', countryCode: 'CU' },
  { label: 'مصر', countryCode: 'EG' },
  { label: 'المغرب', countryCode: 'MA' },
  { label: 'الجزائر', countryCode: 'DZ' },
  { label: 'تونس', countryCode: 'TN' },
  { label: 'لبنان', countryCode: 'LB' },
  { label: 'العراق', countryCode: 'IQ' },
  { label: 'المملكة العربية السعودية', countryCode: 'SA' },
  { label: 'الإمارات العربية المتحدة', countryCode: 'AE' },
  { label: 'قطر', countryCode: 'QA' },
  { label: 'الكويت', countryCode: 'KW' },
  { label: 'عمان', countryCode: 'OM' },
  { label: 'البحرين', countryCode: 'BH' },
  { label: 'قبرص', countryCode: 'CY' },
  { label: 'سوريا', countryCode: 'SY' },
  { label: 'ليبيا', countryCode: 'LY' },
  { label: 'تونس', countryCode: 'TN' },
  { label: 'موريتانيا', countryCode: 'MR' },
  { label: 'السودان', countryCode: 'SD' },
  { label: 'الصومال', countryCode: 'SO' },
  { label: 'إثيوبيا', countryCode: 'ET' },
  { label: 'كينيا', countryCode: 'KE' },
  { label: 'جنوب إفريقيا', countryCode: 'ZA' },
  { label: 'نيجيريا', countryCode: 'NG' },
  { label: 'غانا', countryCode: 'GH' },
  { label: 'كوت ديفوار', countryCode: 'CI' },
  { label: 'الكاميرون', countryCode: 'CM' },
  { label: 'الجابون', countryCode: 'GA' },
  { label: 'الكونغو', countryCode: 'CG' },
  { label: 'لاتفيا', countryCode: 'LV' },
  { label: 'ليتوانيا', countryCode: 'LT' },
  { label: 'بلغاريا', countryCode: 'BG' },
  { label: 'رومانيا', countryCode: 'RO' },
  { label: 'بولندا', countryCode: 'PL' },
  { label: 'صربيا', countryCode: 'RS' },
  { label: 'مقدونيا', countryCode: 'MK' },
  { label: 'مقدونيا', countryCode: 'MK' },
  { label: 'ألبانيا', countryCode: 'AL' },
  { label: 'سلوفينيا', countryCode: 'SI' },
]

export const DAYS = ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'كل يوم']

export const IMAGE_SIZES = [
  {
    size: '1/3',
    class: 'cols-span-3',
  },
  {
    size: '1/2',
    class: 'cols-span-6',
  },
  {
    size: '1/4',
    class: 'cols-span-4',
  },
  {
    size: '1',
    class: 'cols-span-12',
  },
]

export const IMAGE_ORDERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
export const CUSTOMER_STATUS: { condition: string; color: 'success' | 'warning' | 'danger' }[] = [
  {
    condition: 'Responded',
    color: 'success',
  },
  {
    condition: 'Pending',
    color: 'warning',
  },
  {
    condition: 'No response',
    color: 'danger',
  },
]
