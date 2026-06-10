import avuri from "@/assets/products/avuri.jpg.asset.json";
import moringaLeaves from "@/assets/products/moringa-leaves.jpg.asset.json";
import thuthi from "@/assets/products/thuthi.jpg.asset.json";
import flexSeed from "@/assets/products/flex-seed.jpg.asset.json";
import sathakuppai from "@/assets/products/sathakuppai.jpg.asset.json";
import vasambu from "@/assets/products/vasambu.jpg.asset.json";
import marikolunthu from "@/assets/products/marikolunthu.jpg.asset.json";
import vettiver from "@/assets/products/vettiver.jpg.asset.json";
import vallarai from "@/assets/products/vallarai.jpg.asset.json";
import poolankilangu from "@/assets/products/poolankilangu.jpg.asset.json";
import kalachikai from "@/assets/products/kalachikai.jpg.asset.json";
import rosePetal from "@/assets/products/rose-petal.jpg.asset.json";
import karpogaArisi from "@/assets/products/karpoga-arisi.jpg.asset.json";
import moringaSeed from "@/assets/products/moringa-seed.jpg.asset.json";
import ashwagandha from "@/assets/products/ashwagandha.jpg.asset.json";
import hibiscus from "@/assets/products/hibiscus.jpg.asset.json";
import kandaThippili from "@/assets/products/kanda-thippili.jpg.asset.json";
import moringaFlower from "@/assets/products/moringa-flower.jpg.asset.json";

export type Product = {
  id: string;
  name: string;
  tamil?: string;
  category: string;
  priceINR: number; // per Kg, mid-range
  image: string;
  description: string;
};

export const PRODUCTS: Product[] = [
  { id: "avuri", name: "Avuri Leaves (Senna)", category: "Leaves", priceINR: 60, image: avuri.url, description: "Sun-dried senna leaves — traditionally used as a gentle herbal cleanse." },
  { id: "moringa-leaves", name: "Moringa Leaves", category: "Leaves", priceINR: 110, image: moringaLeaves.url, description: "Nutrient-rich dried moringa leaves, packed with vitamins and minerals." },
  { id: "thuthi", name: "Thuthi Leaves", category: "Leaves", priceINR: 40, image: thuthi.url, description: "Dried Thuthi (Abutilon) leaves — a classic Siddha herbal." },
  { id: "flex-seed", name: "Flax Seed", category: "Seeds", priceINR: 120, image: flexSeed.url, description: "Cold-cleaned omega-3 rich flax seeds." },
  { id: "sathakuppai", name: "Sathakuppai (Dill Seed)", category: "Seeds", priceINR: 180, image: sathakuppai.url, description: "Aromatic dill seeds, prized in postnatal care." },
  { id: "vasambu", name: "Vasambu (Sweet Flag)", category: "Roots", priceINR: 180, image: vasambu.url, description: "Sliced sweet-flag rhizome, a traditional infant tonic." },
  { id: "marikolunthu", name: "Marikolunthu", category: "Leaves", priceINR: 100, image: marikolunthu.url, description: "Fragrant Davana (Southernwood) — uplifting herbal aroma." },
  { id: "vettiver", name: "Vettiver Roots", category: "Roots", priceINR: 200, image: vettiver.url, description: "Cooling Khus roots — natural coolant and natural fragrance." },
  { id: "vallarai", name: "Vallarai (Gotu Kola)", category: "Leaves", priceINR: 180, image: vallarai.url, description: "Brain-tonic Vallarai leaves." },
  { id: "poolankilangu", name: "Poolankilangu", category: "Roots", priceINR: 800, image: poolankilangu.url, description: "Premium Poolankilangu roots — prized aromatic root." },
  { id: "kalachikai", name: "Kalachikai", category: "Seeds", priceINR: 110, image: kalachikai.url, description: "Caesalpinia (Fever-nut) seeds — traditional Siddha remedy." },
  { id: "rose-petal", name: "Dried Rose Petals", category: "Flowers", priceINR: 350, image: rosePetal.url, description: "Naturally sun-dried rose petals for tea and skincare." },
  { id: "karpoga-arisi", name: "Karpoga Arisi", category: "Seeds", priceINR: 115, image: karpogaArisi.url, description: "Bavanchi (Psoralea) seeds — Ayurveda's skin-care classic." },
  { id: "moringa-seed", name: "Moringa Seeds", category: "Seeds", priceINR: 230, image: moringaSeed.url, description: "Whole moringa seeds — for planting or natural water purification." },
  { id: "ashwagandha", name: "Amukkiran (Ashwagandha)", category: "Roots", priceINR: 275, image: ashwagandha.url, description: "Hand-graded ashwagandha roots — the classic adaptogen." },
  { id: "hibiscus", name: "Dried Hibiscus", category: "Flowers", priceINR: 450, image: hibiscus.url, description: "Vibrant dried hibiscus for tea, hair care, and natural color." },
  { id: "kanda-thippili", name: "Kanda Thippili (Long Pepper)", category: "Spices", priceINR: 550, image: kandaThippili.url, description: "Premium long pepper catkins, prized in Siddha & Ayurveda." },
  { id: "moringa-flower", name: "Moringa Flowers", category: "Flowers", priceINR: 250, image: moringaFlower.url, description: "Delicate dried moringa blossoms, perfect for infusions." },
];

export const CATEGORIES = ["All", "Leaves", "Seeds", "Roots", "Flowers", "Spices"] as const;
