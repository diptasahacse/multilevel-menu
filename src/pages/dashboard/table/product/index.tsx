import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React, { useState } from "react";
import TableRow from "./components/TableRow";
export interface IProduct {
  id: string;
  name: string;
  color: string;
  category: string;
  price: string;
}
export interface ISelectedProduct {
  data: IProduct[];
}
export interface CheckboxChangeEvent {
  target: HTMLInputElement;
}
const productData: IProduct[] = [
  {
    id: "1",
    name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    id: "2",
    name: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: "$1999",
  },
  {
    id: "3",
    name: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    price: "$99",
  },
  {
    id: "4",
    name: "Apple Watch",
    color: "Silver",
    category: "Accessories",
    price: "$179",
  },
  {
    id: "5",
    name: "iPad",
    color: "Gold",
    category: "Tablet",
    price: "$699",
  },
];

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState<ISelectedProduct>({
    data: [],
  });
  const handleChecked = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      setSelectedProduct({
        ...selectedProduct,
        data: productData,
      });
    } else {
      setSelectedProduct({
        ...selectedProduct,
        data: [],
      });
    }
  };
  const handleAction = ()=>{
    console.log(selectedProduct)
  }
  return (
    <DashboardLayout>
      <div className="flex item-center justify-between">
        <div className="text-xl font-bold">Product</div>
        {selectedProduct.data.length > 0 && (
          <button
            type="button"
            onClick={handleAction}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Action
          </button>
        )}
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    checked={selectedProduct.data.length > 0 ? true : false}
                    onChange={(e) => handleChecked(e)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {productData.map((item) => (
              <TableRow
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                item={item}
                key={item.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Product;
