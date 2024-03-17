import React from "react";

const ShoppingCartPage = () => {
  return (
    <div className="p-4">
      <div className="text-xl font-bold mb-4">Sepetim (2 Ürün)</div>
      <div className="mb-4">
        Sepetindeki Ürünleri Bireysel Veya Kurumsal Fatura Seçerek Alabilirsin.
      </div>
      <ProductCard
        title="KAOF SHOES Kadın Siyah Klasik Ayakkabı Ortopedik Anne Ayakkabısı"
        price={449.99}
        seller="KAOF TR AYAKKABI 9.7"
        image="path/to/shoe/image"
        deliveryTime="En geç yarın kargoda"
        beden="38"
        discount="3 Adet ve Üzeri 40 TL İndirim"
      />
      <ProductCard
        title="warrior Kratos Oyuncu Koltuğu - Jet Black - Ayak Uzatmalı Profesyonel"
        price={7999}
        seller="Mobilya Keyfi 8.8"
        image="path/to/chair/image"
        deliveryTime="Tahmini kargoya teslim: 9 gün içinde"
        discount=""
      />
    </div>
  );
};

const ProductCard = ({
  title,
  price,
  seller,
  image,
  deliveryTime,
  beden,
  discount,
}) => {
  return (
    <div className="bg-white shadow-md p-4 mb-4 rounded">
      <div className="flex items-center mb-2">
        <img src={image} alt={title} className="w-20 h-20 mr-4" />
        <div>
          <div className="text-lg font-bold">{title}</div>
          <div className="text-gray-500 text-sm">{seller}</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-lg font-bold">{price} TL</div>
        <div className="text-gray-500">{deliveryTime}</div>
      </div>
      <div className="text-gray-500 text-sm mt-2">Beden: {beden}</div>
      {discount && (
        <div className="text-green-500 text-sm mt-1">{discount}</div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
