import { View } from 'react-native'
import React from 'react'

const SkeletonCard = () => {
  return (
    <View className="w-1/2 px-2 mb-4">
      <View className="border border-gray-700 gap-2.5">
        {/* Image Skeleton */}
        <View className="w-full h-32 bg-gray-700 animate-pulse" />

        {/* Content Skeleton */}
        <View className="h-34 px-2 py-2 gap-2 bg-[#27292D]/20">
          {/* Top row */}
          <View className="flex flex-row items-center justify-between">
            <View className="w-16 h-4 rounded bg-gray-700 animate-pulse" />
            <View className="w-10 h-4 rounded bg-gray-700 animate-pulse" />
          </View>

          {/* Title */}
          <View className="space-y-2">
            <View className="w-full h-5 rounded bg-gray-700 animate-pulse" />
            <View className="w-3/4 h-5 rounded bg-gray-700 animate-pulse" />
          </View>

          {/* Description */}
          <View className="space-y-2 mt-2">
            <View className="w-full h-4 rounded bg-gray-700 animate-pulse" />
            <View className="w-5/6 h-4 rounded bg-gray-700 animate-pulse" />
          </View>
        </View>
      </View>
    </View>
  )
}

export default SkeletonCard