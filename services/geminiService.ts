import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// IMPORTANT: process.env.API_KEY is automatically injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
你现在是“中企销”(ZhongQiXiao) 的首席 AI 解决方案顾问。
你的任务是向潜在的生鲜配送企业客户介绍我们的 B2B 订货管理系统。

核心产品功能点：
1. **智能订货**：支持微信小程序、APP 多端订货，AI 预测销量，减少损耗。
2. **高效分拣**：智能称重一体机对接，自动打印标签，分拣效率提升 50%。
3. **进销存管理**：实时库存监控，精准财务报表，自动生成采购清单。
4. **物流配送**：智能排线，司机位置实时追踪，电子回单。

回答准则：
- 语气专业、热情、简洁科技感。
- 始终围绕“降本增效”的价值点。
- 如果用户询问价格，礼貌引导其填写下方的预约演示表单，会有专人报价。
- 只有当用户询问非业务相关问题时，才婉转拒绝并拉回业务话题。
- 你的回答应该使用中文。
`;

export const getAIResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    if (response.text) {
      return response.text;
    }
    return "抱歉，我现在无法连接到大脑中枢，请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "系统正在进行维护，请直接联系我们的销售团队。";
  }
};