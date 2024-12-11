import React from "react";
import { LoginJWT } from "@app/views/authentication";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50">
      {/* <div className="container mx-auto px-4 py-20 max-w-md">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="flex flex-col p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                  <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                    Log in
                  </h1>
                  <p className="text-sm text-gray-600">
                    Log in on the internal platform
                  </p>
                </div>
            </div>
            <div></div>
            <div className="flex-grow mt-6">
              <div> */}
      <LoginJWT />
      {/* </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
