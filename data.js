export const passages = [
  {
    id: "sea_view_star",
    title: "Sea View Star",
    type: "literature",
    passage: `Sylvie and Sammy’s teacher has announced that students will do a project for “Make a Difference Day.” This means students will find a special way to help others.

Sylvie and Sammy want to do something special for animals. They plan an art event called "Paint Out." People will paint pictures of their pets and sell them.

They will donate the money to the Sea View Animal Shelter. Before the event, they prepare everything carefully. On the day of the event, many people come, and it becomes a big success.`,

    questions: [
      {
        id: "q1",
        number: 1,
        type: "multiple",
        skill: "vocabulary",
        skillLabelZh: "词义猜测题",
        difficulty: "中等",
        question: `What does "stellar" most likely mean?`,
        choices: ["amazing", "normal", "boring", "fast"],
        answer: 0,
        explanation: `"Stellar" means amazing because Sylvie is describing something very good.`,
        cnExplanation: `这里的 stellar 不是字面上的“星星的”，而是在语境里表示“很棒、很精彩”。Sylvie 想让活动名字听起来更酷、更好。`,
        commonMistake: `孩子容易按字面理解单词，或者脱离上下文猜词。正确做法是看人物说这句话时的语气：她是在夸这个名字。`
      },
      {
        id: "q2",
        number: 2,
        type: "multiple",
        skill: "character",
        skillLabelZh: "人物理解题",
        difficulty: "简单",
        question: `What do Sylvie’s actions show about her?`,
        choices: [
          "She likes playing",
          "She cares about animals",
          "She is tired",
          "She is funny"
        ],
        answer: 1,
        explanation: `She plans an event to help animals, showing she cares about them.`,
        cnExplanation: `Sylvie 一直在想办法帮助动物，还和 Sammy 计划筹款活动，所以能看出她很关心动物。`,
        commonMistake: `孩子容易选表面细节，比如“她喜欢玩”之类，但人物题更重要的是看她做了什么，而不是只看一两个动作。`
      },
      {
        id: "q3",
        number: 3,
        type: "multiple",
        skill: "inference",
        skillLabelZh: "推理题",
        difficulty: "中等",
        question: `Why did Sammy look confused?`,
        choices: [
          "He thought it was not late",
          "He was tired",
          "He forgot something",
          "He was scared"
        ],
        answer: 0,
        explanation: `He looked at the clock and did not think it was late.`,
        cnExplanation: `Sammy 看了钟以后觉得时间还早，所以他不明白 Sylvie 为什么说“太晚了”，因此显得困惑。`,
        commonMistake: `孩子容易凭感觉选“忘东西了”或“累了”，但推理题一定要根据上下文里的具体反应来判断。`
      },
      {
        id: "q4",
        number: 4,
        type: "multiple",
        skill: "theme",
        skillLabelZh: "主题/道理题",
        difficulty: "中等",
        question: `Which detail shows preparation leads to success?`,
        choices: [
          "They played on swings",
          "They liked painting",
          "They planned everything before the event",
          "People came to the event"
        ],
        answer: 2,
        explanation: `Planning before the event shows preparation.`,
        cnExplanation: `题干强调 preparation leads to success，关键要找“提前准备”的证据。真正对应的是他们事先把活动都安排好了。`,
        commonMistake: `孩子容易选结果本身，比如“很多人来了”，但题目问的是“哪一个细节体现准备带来成功”，所以要选准备过程，不是成功结果。`
      },
      {
        id: "q5",
        number: 5,
        type: "multiple",
        skill: "main_idea",
        skillLabelZh: "主旨题",
        difficulty: "中等",
        question: `What is the main idea of the story?`,
        choices: [
          "They like art",
          "They help animals by planning an event",
          "They go to school",
          "They play outside"
        ],
        answer: 1,
        explanation: `The story is about planning an event to help animals.`,
        cnExplanation: `这篇故事的核心不是“画画”本身，而是他们通过策划活动来帮助动物。这个选项最完整、最概括。`,
        commonMistake: `孩子常把一个细节当主旨，比如“他们喜欢艺术”或“他们在外面玩”。主旨应该是贯穿全文、最概括的一句。`
      },
      {
        id: "q6",
        number: 6,
        type: "multiple",
        skill: "feeling",
        skillLabelZh: "人物情绪题",
        difficulty: "简单",
        question: `How does Sylvie feel at the end?`,
        choices: ["Angry", "Confused", "Nervous", "Proud"],
        answer: 3,
        explanation: `The event is successful, so she feels proud.`,
        cnExplanation: `活动最后非常成功，Sylvie 看到成果，最合理的情绪就是 proud（自豪）。`,
        commonMistake: `孩子容易被故事前面的忙乱情节影响，没有看结尾。情绪题尤其要看故事最后发生了什么。`
      }
    ]
  },

  {
    id: "raccoons",
    title: "Raccoons",
    type: "informational",
    passage: `Raccoons are smart animals. They have flexible fingers that help them open things.

They eat many kinds of food depending on where they live. They often come out at night and hide during the day.

Raccoons can sometimes cause problems for people. They knock over trash cans and dig through gardens.`,

    questions: [
      {
        id: "q19",
        number: 19,
        type: "multiple",
        skill: "graphic",
        skillLabelZh: "图文对应题",
        difficulty: "简单",
        question: `How does the graphic help the reader?`,
        choices: [
          "It shows what raccoons look like",
          "It shows their hearing",
          "It shows their vision",
          "It shows where they live"
        ],
        answer: 0,
        explanation: `The graphic helps show raccoon features.`,
        cnExplanation: `这题是看图文关系。图的作用是帮助读者更清楚看到 raccoon 的外形特征。`,
        commonMistake: `孩子容易过度推断图片功能，比如以为图能说明“听觉”“夜视”等，但图只直接展示外形。`
      },
      {
        id: "q20",
        number: 20,
        type: "multiple",
        skill: "inference",
        skillLabelZh: "推理题",
        difficulty: "较难",
        question: `Why do raccoons come out at night?`,
        choices: [
          "They are hungry",
          "They like darkness",
          "They stay safe from danger",
          "They sleep during the day"
        ],
        answer: 2,
        explanation: `They hide during the day to stay safe.`,
        cnExplanation: `文中说 raccoons 白天躲藏是为了安全，所以可以推断它们晚上出来活动，是为了避开危险。`,
        commonMistake: `孩子会选“它们白天睡觉”这种表面正确但不完整的说法。真正原因链条是：白天危险 → 躲起来 → 夜间活动。`
      },
      {
        id: "q21",
        number: 21,
        type: "multiple",
        skill: "structure",
        skillLabelZh: "文本结构题",
        difficulty: "中等",
        question: `Where can you find winter information?`,
        choices: [
          "Flexible Fingers",
          "Eating",
          "Night and Day",
          "Many Different Dens"
        ],
        answer: 3,
        explanation: `That section talks about dens and winter.`,
        cnExplanation: `题目问“冬天的信息在哪一部分”，要去看小标题。关于冬天和窝（dens）的内容出现在 Many Different Dens 里。`,
        commonMistake: `孩子做这种题时常不看小标题，只凭印象猜。说明文一定要利用标题和分段结构。`
      },
      {
        id: "q22",
        number: 22,
        type: "multiple",
        skill: "connection",
        skillLabelZh: "联系理解题",
        difficulty: "较难",
        question: `Which sentence shows habitat affects behavior?`,
        choices: [
          "They have fingers",
          "They eat based on where they live",
          "They feel food",
          "They have dens"
        ],
        answer: 1,
        explanation: `Food depends on where they live.`,
        cnExplanation: `题干强调 habitat（栖息地）影响行为，最直接的句子就是它们吃什么取决于它们生活在哪里。`,
        commonMistake: `孩子常看到“行为”就乱选动作类句子，但题目要求的是“栖息地和行为之间的联系”，要选同时提到地点和行为的句子。`
      },
      {
        id: "q23",
        number: 23,
        type: "multiple",
        skill: "author_view",
        skillLabelZh: "作者观点题",
        difficulty: "中等",
        question: `What does the author think about raccoons?`,
        choices: [
          "They are smart",
          "They are dangerous",
          "They are slow",
          "They are rare"
        ],
        answer: 0,
        explanation: `The passage says they are smart and quick.`,
        cnExplanation: `作者用正面的信息来介绍 raccoons，比如 smart、quick，所以最能代表作者看法的是“它们很聪明”。`,
        commonMistake: `孩子容易抓住文章里提到的负面细节，比如会传播疾病，就误以为作者的整体态度是“危险”。要看全文语气，不是只看一句。`
      },
      {
        id: "q24",
        number: 24,
        type: "writing",
        skill: "vocabulary_evidence",
        skillLabelZh: "词义+证据写作题",
        difficulty: "中等",
        question: `What does "pests" mean? Use two details.`,
        sample: `“Pests” means animals that cause problems. One detail is that raccoons knock over trash cans. Another detail is that they dig through gardens.`,
        template: [
          `"Pests" means ______.`,
          "One detail is ______.",
          "Another detail is ______."
        ],
        cnExplanation: `这题先要解释 pests 的意思，再从文中找两条证据支持。最好的思路是：先下定义，再举出 trash cans 和 gardens 两个细节。`,
        commonMistake: `常见失分点是只解释词义、不写两条证据；或者写了细节但没有先回答“pests 是什么意思”。`
      },
      {
        id: "q25",
        number: 25,
        type: "writing",
        skill: "main_idea",
        skillLabelZh: "主旨写作题",
        difficulty: "中等",
        question: `What is the main idea? Use two details.`,
        sample: `The main idea is that raccoons are smart animals that adapt to where they live. One detail is they eat different foods. Another detail is they use their paws to find food.`,
        template: [
          "The main idea is ______.",
          "One detail is ______.",
          "Another detail is ______."
        ],
        cnExplanation: `这题考主旨概括。先用一句话说全文主要讲什么，再给两条支持细节。`,
        commonMistake: `孩子容易把一个局部内容当主旨，比如只写“raccoons eat food”或“they come out at night”。主旨要更全面。`
      }
    ]
  },

  {
    id: "big_moon_tortilla",
    title: "Big Moon Tortilla",
    type: "literature",
    passage: `Marta Enos smells Grandmother’s fresh tortillas and rushes toward the cookhouse.

In her hurry, she knocks over her homework papers. The wind blows them away, and dogs tear them up. Then Marta steps on her glasses and breaks them too.

Marta feels very upset, but Grandmother comforts her. She says that when people have problems, they must choose what they will be. Sometimes they should be calm like a rock, strong like a mountain lion, or wise like an eagle.

Grandmother fixes Marta’s glasses with tape. In the end, Marta decides to be like the eagle, look at the problem from high above, and then return to do her homework.`,

    questions: [
      {
        id: "q26",
        number: 26,
        type: "multiple",
        skill: "plot",
        skillLabelZh: "情节因果题",
        difficulty: "简单",
        question: `Why is the information about Marta rushing important to the story?`,
        choices: [
          "It shows the cause of a problem",
          "It describes the setting",
          "It hints at a happy ending",
          "It introduces a new character"
        ],
        answer: 0,
        explanation: `Marta rushes, knocks over the table, and that causes the homework problem.`,
        cnExplanation: `Marta 因为太着急，才导致作业被吹走、眼镜坏掉，所以这一信息的重要性在于它说明了问题发生的原因。`,
        commonMistake: `孩子容易把“开头的信息”误看成背景介绍，其实这里更关键的是它推动了后面的情节。`
      },
      {
        id: "q27",
        number: 27,
        type: "multiple",
        skill: "vocabulary",
        skillLabelZh: "词义猜测题",
        difficulty: "中等",
        question: `Which meaning of "spread" is used when the wind spread the papers over the village?`,
        choices: [
          "scattered around",
          "grew slowly",
          "became known",
          "shared freely"
        ],
        answer: 0,
        explanation: `The papers were blown and scattered in many places.`,
        cnExplanation: `这里的 spread 是“吹散、散落开”的意思，不是“传播消息”或“慢慢增长”。`,
        commonMistake: `孩子会套用平时熟悉的意思，比如“传播”，但做词义题必须回到故事场景里理解。`
      },
      {
        id: "q28",
        number: 28,
        type: "multiple",
        skill: "character_reaction",
        skillLabelZh: "人物反应题",
        difficulty: "简单",
        question: `Which detail best tells why Marta begins crying?`,
        choices: [
          "Her stomach makes noise",
          "She runs to the cookhouse",
          "The dogs bark during the chase",
          "Her homework is ruined and her glasses are broken"
        ],
        answer: 3,
        explanation: `Marta cries because two bad things happen: her homework is ruined and her glasses are broken.`,
        cnExplanation: `她开始哭，不是因为肚子饿，也不是因为狗在叫，而是因为作业毁了、眼镜也坏了。`,
        commonMistake: `孩子容易选“故事里先发生的事”，而不是“真正让她哭的直接原因”。`
      },
      {
        id: "q29",
        number: 29,
        type: "multiple",
        skill: "theme",
        skillLabelZh: "主题/信念题",
        difficulty: "中等",
        question: `Which detail best shows what Grandmother believes?`,
        choices: [
          "Tortillas are the best food",
          "When people have problems, they must choose what they will be",
          "The earth looks small from above",
          "Broken glasses can be taped"
        ],
        answer: 1,
        explanation: `This statement expresses Grandmother’s lesson about handling problems.`,
        cnExplanation: `祖母真正相信、并想教给 Marta 的，是人面对问题时应该选择怎样的态度和方式。`,
        commonMistake: `孩子可能会选故事里祖母做过的事，比如修眼镜，但那只是行为，不是她的核心信念。`
      },
      {
        id: "q30",
        number: 30,
        type: "multiple",
        skill: "character_understanding",
        skillLabelZh: "人物理解题",
        difficulty: "中等",
        question: `What does Marta most likely think about Grandmother’s healing song?`,
        choices: [
          "It reminds her of a story",
          "It helps her make a choice",
          "It makes her want to dance",
          "It teaches her about animals"
        ],
        answer: 1,
        explanation: `After hearing Grandmother’s words, Marta decides to be like the eagle.`,
        cnExplanation: `祖母的话帮助 Marta 改变了看问题的方式，最后她做出了“像 eagle 一样”的选择。`,
        commonMistake: `孩子容易选表面上比较温柔的选项，比如“它让她想起故事”，但要看这段话对 Marta 产生了什么实际影响。`
      },
      {
        id: "q31",
        number: 31,
        type: "multiple",
        skill: "summary",
        skillLabelZh: "总结题",
        difficulty: "中等",
        question: `Which detail is most important to include in a summary of the story?`,
        choices: [
          "Marta’s stomach makes loud noises",
          "The tortillas are in the cookhouse",
          "The tortillas bubble and turn brown",
          "Marta decides to be like an eagle"
        ],
        answer: 3,
        explanation: `That detail captures the story’s important lesson and Marta’s change.`,
        cnExplanation: `总结要抓住故事最核心的变化。Marta 决定像 eagle 一样看待问题，是整个故事最重要的转折。`,
        commonMistake: `孩子做 summary 题时常选生动细节，而不是最能代表整篇故事中心发展的内容。`
      }
    ]
  },

  {
    id: "north_wind_sun",
    title: "The North Wind and the Sun",
    type: "poetry",
    passage: `The North Wind and the Sun argue about who is more powerful.

They see a man wearing a coat and decide to have a contest. The Wind tries first. It blows hard and shows its strength, but the man only shivers and pulls his coat tighter.

Then the Sun gently shines and warms the man. As the man gets warmer, he unbuttons his coat and finally takes it off.

The poem shows that gentle warmth works better than force.`,

    questions: [
      {
        id: "q32",
        number: 32,
        type: "writing",
        skill: "character_trait",
        skillLabelZh: "人物性格写作题",
        difficulty: "中等",
        question: `In "The North Wind and the Sun," what do lines 9 through 12 show about the North Wind? Use two details from the poem to support your response.`,
        sample: `Lines 9 through 12 show that the North Wind is proud and competitive. One detail is that the Wind says the Sun is not very bright. Another detail is that the Wind wants to have a contest to prove it is stronger.`,
        template: [
          "Lines 9 through 12 show that the North Wind is ______.",
          "One detail is ______.",
          "Another detail is ______."
        ],
        cnExplanation: `这题先判断 North Wind 的性格，再用两条诗中的证据支持。最合适的方向是 proud、competitive。`,
        commonMistake: `常见问题是只写性格词，不给证据；或者给了细节，却没有明确回答“这些句子说明 Wind 是什么样的”。`
      },
      {
        id: "q33",
        number: 33,
        type: "writing",
        skill: "attitude_toward_power",
        skillLabelZh: "态度写作题",
        difficulty: "中等",
        question: `In "The North Wind and the Sun," how does the Sun feel about having power? Use two details from the poem to support your response.`,
        sample: `The Sun feels calm and confident about having power. One detail is that the Sun says it is gentle and warm. Another detail is that the Sun quietly warms the man until he takes off his coat.`,
        template: [
          "The Sun feels ______ about having power.",
          "One detail is ______.",
          "Another detail is ______."
        ],
        cnExplanation: `这题不是只问 Sun 做了什么，而是问它对 power 的态度。答案方向更偏 calm、confident，而不是强硬。`,
        commonMistake: `孩子容易只复述情节，比如“Sun shines on the man”，但没有说出 Sun 的态度。`
      },
      {
        id: "q34",
        number: 34,
        type: "writing",
        skill: "compare_characters",
        skillLabelZh: "人物比较写作题",
        difficulty: "中等",
        question: `In the poem, how do the Sun and the North Wind show that they are alike? Use two details from the poem to support your response.`,
        sample: `The Sun and the North Wind are alike because both think they are powerful. One detail is that both agree to a contest. Another detail is that each tries to make the man take off his coat.`,
        template: [
          "The Sun and the North Wind are alike because ______.",
          "One detail is ______.",
          "Another detail is ______."
        ],
        cnExplanation: `这题考 compare。不是写谁赢了，而是写两者“相同点”。最明显的相同点是：都觉得自己强、都参加了比赛、都想让男人脱下外套。`,
        commonMistake: `孩子最常见错误是写成对比题，只写不同点，比如 Wind 很猛、Sun 很温柔。题目要的是 alike。`
      }
    ]
  }
];
