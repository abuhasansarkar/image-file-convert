import React from 'react'

interface ConversionToolMicrodataProps {
  fromFormat: string
  toFormat: string
  toolName: string
  description: string
  features: string[]
  children: React.ReactNode
}

export function ConversionToolMicrodata({
  fromFormat,
  toFormat,
  toolName,
  description,
  features,
  children
}: ConversionToolMicrodataProps) {
  return (
    <div
      itemScope
      itemType="https://schema.org/SoftwareApplication"
      className="w-full"
    >
      <meta itemProp="name" content={toolName} />
      <meta itemProp="description" content={description} />
      <meta itemProp="applicationCategory" content="MultimediaApplication" />
      <meta itemProp="operatingSystem" content="Web Browser" />
      <meta itemProp="url" content={`https://your-domain.com/convert/${fromFormat}-${toFormat}`} />
      
      <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="price" content="0" />
        <meta itemProp="priceCurrency" content="USD" />
        <meta itemProp="availability" content="https://schema.org/InStock" />
      </div>

      <div itemProp="author" itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="Image Converter Tool" />
        <meta itemProp="url" content="https://your-domain.com" />
      </div>

      {features.map((feature, index) => (
        <meta key={index} itemProp="featureList" content={feature} />
      ))}

      <div
        itemProp="mainEntity"
        itemScope
        itemType="https://schema.org/WebApplication"
      >
        {children}
      </div>
    </div>
  )
}

interface ConversionStepMicrodataProps {
  stepNumber: number
  stepName: string
  stepDescription: string
  children: React.ReactNode
}

export function ConversionStepMicrodata({
  stepNumber,
  stepName,
  stepDescription,
  children
}: ConversionStepMicrodataProps) {
  return (
    <div
      itemProp="step"
      itemScope
      itemType="https://schema.org/HowToStep"
    >
      <meta itemProp="position" content={stepNumber.toString()} />
      <meta itemProp="name" content={stepName} />
      <meta itemProp="text" content={stepDescription} />
      {children}
    </div>
  )
}

export function ConversionProcessMicrodata({ children }: { children: React.ReactNode }) {
  return (
    <div
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <meta itemProp="name" content="How to Convert Images Online" />
      <meta itemProp="description" content="Step-by-step guide to convert images using our online tool" />
      <meta itemProp="totalTime" content="PT2M" />
      
      <div itemProp="tool" itemScope itemType="https://schema.org/HowToTool">
        <meta itemProp="name" content="Web Browser" />
      </div>

      <div itemProp="supply" itemScope itemType="https://schema.org/HowToSupply">
        <meta itemProp="name" content="Image Files" />
      </div>

      {children}
    </div>
  )
}
