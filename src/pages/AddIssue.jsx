import axios from 'axios';
import React, { useState } from 'react'

function AddIssue() {
    {/* owner,title,description,category,image,location */}

    const [issue,setIssue]=useState({title:"",description:"",category:"pothole",image:null,location:""})
  
    function handleSubmit(event){
        event.preventDefault()
        console.log(issue);
        addIssueApi()
        
    }

    async function addIssueApi(){

        let token = localStorage.getItem("token")

        let headers={
            "Content-Type":"multipart/form-data",
            "Authorization":token
        }


        let response=await axios.post("http://127.0.0.1:8000/api/issues/",issue,{headers})

        console.log(response.data);
        
    }



    return (
    <div>      
       <div class="bg-white shadow">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 class="text-3xl font-bold text-gray-900">Report a Road Issue</h1>
            <p class="text-gray-600 mt-1">Help us improve road safety by reporting problems in your area</p>
        </div>
    </div>

    {/* <!-- Form Container --> */}
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* <!-- Progress Indicator --> */}
            <div class="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
                <div class="flex items-center justify-between text-white">
                    <div class="flex items-center space-x-2">
                        <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span class="text-purple-600 font-bold">1</span>
                        </div>
                        <span class="font-medium">Issue Details</span>
                    </div>
                    <div class="flex-1 h-1 bg-purple-400 mx-4"></div>
                    <div class="flex items-center space-x-2">
                        <div class="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                            <span class="font-bold">2</span>
                        </div>
                        <span class="font-medium opacity-75">Location</span>
                    </div>
                    <div class="flex-1 h-1 bg-purple-400 mx-4"></div>
                    <div class="flex items-center space-x-2">
                        <div class="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                            <span class="font-bold">3</span>
                        </div>
                        <span class="font-medium opacity-75">Submit</span>
                    </div>
                </div>
            </div>

            {/* <!-- Form --> */}
            <form  onSubmit={handleSubmit} class="p-8">
                <div class="space-y-8">
                    {/* <!-- Issue Title --> */}
                    <div>
                        <label for="title" class="block text-sm font-semibold text-gray-700 mb-2">
                            Issue Title <span class="text-red-500">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            value={issue.title}
                            onChange={(e)=>setIssue({...issue,title:e.target.value})}
                            required
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                            placeholder="e.g., Large pothole on Main Street"
                        />
                        <p class="text-gray-500 text-sm mt-1">Provide a clear, concise title for the issue</p>
                    </div>

                    {/* <!-- Category --> */}
                    <div>
                        <label for="category" class="block text-sm font-semibold text-gray-700 mb-2">
                            Category <span class="text-red-500">*</span>
                        </label>
                        <select 
                            id="category" 
                            name="category" 
                              value={issue.category}
                            onChange={(e)=>setIssue({...issue,category:e.target.value})}
                            required
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                        >
                            <option value="">Select a category</option>
                            <option value="pothole">🕳️ Pothole</option>
                            <option value="streetlight">💡 Streetlight</option>
                            <option value="drainage">🚸 Sign Damage</option>
                            <option value="garbage">🗑️ garbage</option>
                            <option value="other">📋 Other</option>
                        </select>
                    </div>

                    {/* <!-- Description --> */}
                    <div>
                        <label for="description" class="block text-sm font-semibold text-gray-700 mb-2">
                            Description <span class="text-red-500">*</span>
                        </label>
                        <textarea 
                            id="description" 
                            name="description" 
                             value={issue.description}
                            onChange={(e)=>setIssue({...issue,description:e.target.value})}
                            
                            required
                            rows="5"
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
                            placeholder="Describe the issue in detail. Include information about severity, exact location, and any safety concerns..."
                        ></textarea>
                        <p class="text-gray-500 text-sm mt-1">Minimum 20 characters</p>
                    </div>

                    {/* <!-- Location --> */}
                    <div>
                        <label for="location" class="block text-sm font-semibold text-gray-700 mb-2">
                            Location <span class="text-gray-400">(Optional)</span>
                        </label>
                        <div class="relative">
                            <input 
                                type="text" 
                                id="location" 
                                 value={issue.location}
                            onChange={(e)=>setIssue({...issue,location:e.target.value})}
                                name="location" 
                                class="w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                                placeholder="e.g., Main Road near Bus Stop, Kochi"
                            />
                            <svg class="w-5 h-5 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </div>
                        <p class="text-gray-500 text-sm mt-1">Provide street name, landmark, or address</p>
                    </div>

                    {/* <!-- Image Upload --> */}
                    <div>
                        <label for="image" class="block text-sm font-semibold text-gray-700 mb-2">
                            Upload Photo <span class="text-gray-400">(Optional but recommended)</span>
                        </label>
                        <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition">
                            <input 
                                type="file" 
                                id="image" 
                                name="image" 
                                accept="image/*"
                                class="hidden"
                                onChange={(e)=>setIssue({...issue,image:e.target.files[0]})}
                                
                            />
                            <label for="image" class="cursor-pointer">
                                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <p class="text-gray-700 font-medium">Click to upload or drag and drop</p>
                                <p class="text-gray-500 text-sm mt-1">PNG, JPG, JPEG up to 10MB</p>
                            </label>
                        </div>
                    </div>

                    {/* <!-- Info Box --> */}
                    <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 flex items-start space-x-3">
                        <svg class="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <div>
                            <h4 class="font-semibold text-purple-900 mb-1">Reporting Guidelines</h4>
                            <ul class="text-purple-700 text-sm space-y-1">
                                <li>• Provide accurate and specific information</li>
                                <li>• Upload clear photos showing the issue</li>
                                <li>• Do not report fake or duplicate issues</li>
                                <li>• Your report will be reviewed by authorities</li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Action Buttons --> */}
                    <div class="flex items-center justify-between pt-6 border-t">
                        <a href="issues.html" class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition">
                            Cancel
                        </a>
                        <button 
                            type="submit"
                            class="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition duration-200 shadow-lg"
                        >
                            Submit Issue Report
                        </button>
                    </div>
                </div>
            </form>
        </div>

        {/* <!-- Additional Help --> */}
        <div class="mt-6 text-center">
            <p class="text-gray-600">
                Need help? Check out our 
                <a href="#" class="text-purple-600 hover:text-purple-700 font-semibold">reporting guidelines</a> 
                or 
                <a href="#" class="text-purple-600 hover:text-purple-700 font-semibold">contact support</a>
            </p>
        </div>
    </div>
    </div>
  )
}

export default AddIssue
