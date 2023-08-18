import React from "react";
import { CheckboxChangeEvent, IProduct, ISelectedProduct } from "../";
interface ProductPropType {
  item: IProduct;
  selectedProduct: ISelectedProduct;
  setSelectedProduct: React.Dispatch<React.SetStateAction<ISelectedProduct>>;
}
const TableRow = ({
  item,
  selectedProduct,
  setSelectedProduct,
}: ProductPropType) => {
  const checkedHandler = (e: CheckboxChangeEvent) => {
    if (!e.target.checked) {
      const selectedData = selectedProduct.data.filter((i) => i.id !== item.id);
      setSelectedProduct({
        ...selectedProduct,
        data: selectedData,
      });
    } else {
      setSelectedProduct({
        ...selectedProduct,
        data: [...selectedProduct.data, item],
      });
    }
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            checked={
              selectedProduct.data.find((product) => product.id === item.id)
                ? true
                : false
            }
            onChange={(e) => checkedHandler(e)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {item.name}
      </th>
      <td className="px-6 py-4">{item.color}</td>
      <td className="px-6 py-4">{item.category}</td>
      <td className="px-6 py-4">{item.price}</td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
