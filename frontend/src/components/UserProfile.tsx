import React from 'react';
import { Settings, CreditCard, LogOut, Crown, Zap } from 'lucide-react';
import { logout } from "../../../backend/Authentication/appwrite";


interface UserProfileProps {
    isOpen: boolean;
    onClose: () => void;
}

type User = {
    name: string;
    email: string;
    avatar: string;
    plan: string;
    descriptionsUsed: number;
    descriptionsLimit: number;
    joinDate: string;
};

let demoUser = {
    name: "Demo User",
    email: "demo@persway.com",
    avatar: "",
    plan: "",
    descriptionsUsed: 0,
    descriptionsLimit: 1,
    joinDate: "",
}

export function SetUserDtl(Account?: Partial<User>): void {
    if (Account) {

        demoUser = { ...demoUser, ...Account };
    } else {
        demoUser.name = "Demo User"
        demoUser.email = "demo@persway.com"
        demoUser.avatar = ""
        demoUser.plan = "Free",
            demoUser.descriptionsUsed = 0,
            demoUser.descriptionsLimit = 1,
            demoUser.joinDate = new Date().toLocaleString("en-US", { month: "long", year: "numeric" })

    }
    console.log(Account)

    console.log(demoUser)
}



export const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return
    null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-start justify-start z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-80 mt-16 ml-4 animate-slide-up">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-3xl p-6 text-white"  >
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transition-shadow duration-300" >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.8}
                                stroke="white"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
                                />
                            </svg>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">{demoUser.name}</h3>
                            <p className="text-blue-100 text-sm">{demoUser.email}</p>
                            <div className="flex items-center mt-1">
                                <Crown className="h-4 w-4 text-yellow-300 mr-1" />
                                <span className="text-sm font-medium">{demoUser.plan} Plan</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Usage Stats */}
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Descriptions Used</span>
                        <span className="text-sm text-gray-500">{demoUser.descriptionsUsed}/{demoUser.descriptionsLimit}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(demoUser.descriptionsUsed / demoUser.descriptionsLimit) * 100}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                        {demoUser.descriptionsLimit - demoUser.descriptionsUsed} descriptions remaining
                    </p>
                </div>

                {/* Menu Items */}
                <div className="p-4">
                    <div className="space-y-2">
                        <button className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left">
                            <Settings className="h-5 w-5 text-gray-500" />
                            <span className="text-gray-700 font-medium">Account Settings</span>
                        </button>

                        <button className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left">
                            <CreditCard className="h-5 w-5 text-gray-500" />
                            <span className="text-gray-700 font-medium">Billing & Plans</span>
                        </button>

                        <button className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left">
                            <Zap className="h-5 w-5 text-gray-500" />
                            <span className="text-gray-700 font-medium">Usage History</span>
                        </button>


                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100">
                    <button className="w-full flex items-center justify-center space-x-2 p-3 rounded-xl bg-red-50 hover:bg-red-100 transition-colors text-red-600"
                        onClick={() => {
                            logout();
                            SetUserDtl();
                            onClose();
                        }}
                    >
                        <LogOut className="h-5 w-5" />
                        <span className="font-medium">Sign Out</span>
                    </button>
                    <p className="text-xs text-gray-400 text-center mt-3">
                        Member since {demoUser.joinDate}
                    </p>
                </div>

                {/* Close overlay */}
                <div
                    className="fixed inset-0 -z-10"
                    onClick={onClose}
                ></div>

            </div>




        </div>
    );
};