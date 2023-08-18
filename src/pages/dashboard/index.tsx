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

interface SelectedItemType {
  id: string;
}

interface SelectedType {
  id: string;
  data: SelectedItemType[];
}
/*



*/
const OrderBox = ({ item }: { item: OrderListType }) => {
  const [selectedState, setSelectedState] = useState<SelectedType>({
    id: item.orderId,
    data: [],
  });
  const handleChecked = (e, id: string) => {
    if (e.target.checked) {
      const data = item.data.map((item) => {
        return {
          id: item.id,
        };
      });
      setSelectedState({
        ...selectedState,

        data,
      });
    } else {
      setSelectedState({
        ...selectedState,

        data: [],
      });
    }
  };
  return (
    <div>
      <div>
        <div className=" flex items-center gap-1">
          <input
            onChange={(e) => handleChecked(e, item.orderId)}
            type="checkbox"
          />
          <h3>OrderId: {item.orderId}</h3>
        </div>
        <div className=" pl-3">
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
interface ProType {
  item: ProductType;
  selectedState: SelectedType;
  setSelectedState: React.Dispatch<React.SetStateAction<SelectedType>>;
}

const ProductItem = ({ item, selectedState, setSelectedState }: ProType) => {
  const handleCheck = (e) => {
    if (!e.target.checked) {
      const selectedData = selectedState.data.filter((i) => i.id !== item.id);
      setSelectedState({
        ...selectedState,
        data: selectedData,
      });
    } else {
      const d = {
        id: item.id,
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
