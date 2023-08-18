import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React, { useEffect, useState } from "react";

interface ProductType {
  name: string;
  id: string;
}
interface OrderListType {
  orderId: string;
  data: ProductType[];
}
interface CheckboxChangeEvent {
  target: HTMLInputElement;
}
interface ProductPropType {
  item: ProductType;
  selectedState: OrderListType;
  setSelectedState: React.Dispatch<React.SetStateAction<OrderListType>>;
}
const list: OrderListType[] = [
  {
    orderId: "1",
    data: [
      {
        name: "Product 1",
        id: "1.1",
      },
      {
        name: "Product 2",
        id: "1.2",
      },
      {
        name: "Product 3",
        id: "1.3",
      },
    ],
  },
  {
    orderId: "2",
    data: [
      {
        name: "Product 4",
        id: "2.1",
      },
      {
        name: "Product 5",
        id: "2.2",
      },
    ],
  },
];
const Dashboard = () => {
  return (
    <DashboardLayout>
      {list.map((item, index) => (
        <OrderBox key={item.orderId} item={item} />
      ))}
    </DashboardLayout>
  );
};

export default Dashboard;

const OrderBox = ({ item }: { item: OrderListType }) => {
  const [selectedState, setSelectedState] = useState<OrderListType>({
    orderId: item.orderId,
    data: [],
  });
  const handleChecked = (e: CheckboxChangeEvent, id: string) => {
    if (e.target.checked) {
      setSelectedState({
        ...selectedState,
        data: item.data,
      });
    } else {
      setSelectedState({
        ...selectedState,
        data: [],
      });
    }
  };

  const actionHandler = () => {
    console.log(selectedState);
  };
  return (
    <div className="mb-7">
      <div>
        <div className=" bg-green-300 px-4 py-2 rounded-md flex justify-between items-center">
          <div className=" flex items-center gap-1">
            <input
              onChange={(e) => handleChecked(e, item.orderId)}
              type="checkbox"
              checked={selectedState.data.length > 0 ? true : false}
            />
            <h3>OrderId: {item.orderId}</h3>
          </div>
          <button
            disabled={selectedState.data.length > 0 ? false : true}
            onClick={actionHandler}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Action
          </button>
        </div>
        <div className=" mt-3 pl-3">
          {item.data.map((item, index) => (
            <ProductItem
              selectedState={selectedState}
              setSelectedState={setSelectedState}
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductItem = ({
  item,
  selectedState,
  setSelectedState,
}: ProductPropType) => {
  const handleCheck = (e: CheckboxChangeEvent) => {
    if (!e.target.checked) {
      const selectedData = selectedState.data.filter((i) => i.id !== item.id);
      setSelectedState({
        ...selectedState,
        data: selectedData,
      });
    } else {
      const d = {
        id: item.id,
        name: item.name,
      };

      setSelectedState({
        ...selectedState,
        data: [...selectedState.data, d],
      });
    }
  };
  return (
    <div
      className=" bg-gray-400 my-1 p-1 px-2 rounded-md flex items-center gap-1"
      key={item.id}
    >
      <input
        checked={
          selectedState.data.find((i) => i.id === item.id) ? true : false
        }
        type="checkbox"
        onChange={(e) => handleCheck(e)}
      />
      <div>{item.name}</div>
    </div>
  );
};
