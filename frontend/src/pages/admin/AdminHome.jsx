import React, { useEffect } from "react";
import "./admin.css";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../components/DefaultLayout";
import { deleteACar, getAllCars } from "../../redux/actions/carActions";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { Button, Popconfirm, message } from "antd";
function AdminHome() {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  return (
    <DefaultLayout>
      {loading === true && <Loading />}
      <Link
        to={"/addCar"}
        style={{
          marginLeft: "1080px",
          marginBottom: "10px",
          marginTop: "20px",
        }}
        className="btn"
      >
        Add New Car
      </Link>
      <div className="admin-container">
        {cars &&
          cars.map((item) => {
            return (
              <figure className="snip1336" key={item._id}>
                <img src={item.img} alt={item.name} />
                <figcaption>
                  <h2>{item.name}</h2>
                  <div className="buttons">
                    <Link className="btn1" to={`/editCar/${item._id}`}>
                      Edit
                    </Link>
                    <Popconfirm
                      title="Are you sure to delete this task?"
                      onConfirm={()=>{
                          dispatch(deleteACar({carId:item._id}))
                      }}
                    
                      okText="Yes"
                      cancelText="No"
                    >
                    <Button type="text" danger>
                      Delete
                    </Button>
                    </Popconfirm>
                  </div>
                </figcaption>
              </figure>
            );
          })}
      </div>
    </DefaultLayout>
  );
}

export default AdminHome;
