import DevicePage from '../DevicesPage/DevicePage'
import './Device.css'
import p1 from '../../assets/p1.webp'
import p2 from '../../assets/p2.webp'
import p3 from '../../assets/p3.webp'
import p4 from '../../assets/p4.webp'
import p5 from '../../assets/p5.webp'
import p6 from '../../assets/p6.webp'
import p7 from '../../assets/p7.webp'
import p8 from '../../assets/p8.webp'
import p9 from '../../assets/p9.webp'
import p10 from '../../assets/p10.webp'
import p11 from '../../assets/p11.jpg'
import p12 from '../../assets/p12.webp'
const Device = () => {
  return (
    <div className='device'>
    <DevicePage src={p1} para="OnePlus 12 (Silky Black, 16GB RAM, 512GB Storage)" price="₹69,999" />
    <DevicePage src={p2} para="Apple iPhone 15 Pro (128 GB) - Blue Titanium" price="webp" />
    <DevicePage src={p3} para="Samsung Galaxy M14 5G (ICY Silver,6GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh 5G SP|5nm Processor|2 Gen. OS Upgrade & 4 Year Security Update|12GB RAM with RAM Plus|Android 13|Without Charger" price="₹12,490" />
    <DevicePage src={p4} para="Samsung 138 cm (55 inches) 4K Ultra HD Smart QLED TV QA55Q60DAULXL (Black)" price=" ₹77,990" />
    <DevicePage src={p5} para="iGear Crystal Wireless Earbuds, Transparent Charging Case and LED Digital Display, Bluetooth Earphones with ENC Noise Cancelling, Touch Control, Google Assistant and Siri Support (Ivory White)" price="₹1,126" />
    <DevicePage src={p6} para="Noise Buds VS402 in-Ear Truly Wireless Earbuds with 50H of Playtime, Low Latency, Quad Mic with ENC, Instacharge(10 min=120 min),10mm Driver, BT v5.3, Breathing LED Lights (Neon White)" price="₹1,499" />
    <DevicePage src={p7} para="ASUS Vivobook Go 14 (2023), 14 (35.56 cm) FHD (1920 x 1080) 16:9, Intel Celeron N4500, Thin and Light Laptop (8GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Black/1.3 Kg), E410KA-EK013W" price="₹22,990
" />
    <DevicePage src={p8} para="Apple 2024 MacBook Air 13″ Laptop with M3 chip: 34.46 cm (13.6″) Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera, Touch ID- Midnight" price="₹1,07,990" />
    <DevicePage src={p9} para="ZEBRONICS Thunder Bluetooth 5.3 Wireless Over Ear Headphones with 60H Backup, Gaming Mode, Dual Pairing, ENC, AUX, Micro SD, Voice Assistant, Comfortable Earcups, Call Function(Sea Green)" price="₹799" />
    <DevicePage src={p10} para="HONOR Pad 9 with Free Bluetooth Keyboard, 12.1-Inch 2.5K Display, 16GB (8+8GB Extended), 256GB Storage, Snapdragon 6 Gen 1 (4nm), 8 Speakers, Up-to 17 Hours, Android 13, WiFi Tablet, Metal Body, Gray" price="₹23,999" />
    <DevicePage src={p11} para="Apple iPad Pro 11″ (M4): Ultra Retina XDR Display, 256GB, Landscape 12MP Front Camera / 12MP Back Camera, LiDAR Scanner, Wi-Fi 6E, Face ID, All-Day Battery Life, Standard Glass — Space Black" price="₹99,900" />
    <DevicePage src={p12} para="Ant Esports MK 1700 Wired Membrane Gaming Keyboard –with Backlit RGB LED, USB-A Connection, Quiet Keystrokes, 12 Multimedia Function Keys - for Computer, PC, Desktop, Gamer– 1 Year Warranty–Mercury" price="₹619" />
    </div>
  )
}

export default Device