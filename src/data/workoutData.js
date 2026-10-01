// data/workoutData.js
// THE AESTHETIC V-TAPER BLUEPRINT
// 16-Week Evidence-Based Natural Hypertrophy Program
// 6 days/week | 5 upper-body days + 1 leg day | 6 exercises per session

const workoutData = {
  MONDAY: {
    day: 'MONDAY',
    color: '#FF3A3A',
    focus: 'Push A: Chest + Side Delts + Triceps',
    sessionGoal: 'Build the upper chest shelf, add side delt width, develop long head triceps mass, and train abs.',
    duration: '70–85 minutes',
    warmup: [
      'Light cardio: incline treadmill walk or bike (5 min)',
      'Arm circles forward & backward (10 each direction)',
      'Band pull-aparts (15 reps)',
      'Shoulder dislocations with band (10 reps)',
      'Cat-cow stretches (10 reps)',
      'World\'s greatest stretch (5 per side)'
    ],
    exercises: [
      {
        id: 'mon_1',
        name: '30° Incline Dumbbell Press',
        sets: 3,
        reps: '8-12',
        rest: 150,
        rpe: '7-8',
        tempo: '3-0-1-1',
        notes: 'Upper chest priority. 30° incline (one notch above flat). Retract & depress scapulae. Full stretch at bottom. Press upward and slightly inward — dumbbells converge at top without touching. Do NOT lock elbows.',
        warmupSets: '2 × 12–15 (50–60% working weight)',
        progression: 'Double progression. When 3×12 at target RIR → increase by 2.5 kg/dumbbell, reset to 3×8.',
        primaryMuscles: ['Clavicular Pectoralis Major (Upper Chest)'],
        secondaryMuscles: ['Anterior Deltoid', 'Triceps', 'Sternal Pectoralis Major'],
        replacements: ['Incline barbell press (30°)', 'Incline Smith machine press (30°)', 'Incline machine press']
      },
      {
        id: 'mon_2',
        name: 'Machine Chest Press (Flat or Slight Incline)',
        sets: 3,
        reps: '8-12',
        rest: 120,
        rpe: '7-8',
        tempo: '2-1-1-0',
        notes: 'Fixed path — 100% pec-focused effort. Adjust seat so handles align with mid-chest (nipple line). Scapulae retracted/depressed. Do not let weight stack touch between reps. Focus on squeezing the chest, not pushing with the arms.',
        warmupSets: '1 × 12 (light)',
        progression: 'Double progression: 8–12 range. Increase by smallest machine increment when 3×12 at target RIR.',
        primaryMuscles: ['Sternal Pectoralis Major (Mid Chest)', 'Clavicular Pectoralis Major'],
        secondaryMuscles: ['Anterior Deltoid', 'Triceps'],
        replacements: ['Flat Smith machine press', 'Flat dumbbell press', 'Converging chest press machine']
      },
      {
        id: 'mon_3',
        name: 'Low-to-High Cable Fly',
        sets: 3,
        reps: '10-15',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Upper chest isolation — removes triceps involvement entirely. Cables at lowest position. Stagger stance. Sweep arms upward and inward, bringing hands together at upper chest/chin level. Squeeze upper chest at top for 1 sec. Slight bend in elbows throughout.',
        progression: 'Double progression: 12–15 range, small cable increments.',
        primaryMuscles: ['Clavicular Pectoralis Major'],
        secondaryMuscles: ['Anterior Deltoid (minor)', 'Sternal Pec (minor)'],
        replacements: ['Incline dumbbell fly (30°)', 'Pec deck machine', 'Svend press']
      },
      {
        id: 'mon_4',
        name: 'Cable Lateral Raise (Behind-the-Body)',
        sets: 3,
        reps: '10-15',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-0',
        notes: 'MOST IMPORTANT EXERCISE IN THE PROGRAM. Cable behind body loads the stretch position for lateral delt. Lean 10–15° away from cable column. Raise to shoulder height, pause 1 sec at top. Lower slowly (3 sec). No momentum — dead stop at bottom. Slight 15–20° elbow bend. Do NOT shrug upper trap.',
        progression: 'Double progression: 10–15 range. Increase by smallest cable increment (1.25 kg). Phase 4: add 4–6 lengthened partials in bottom 1/3 ROM on last set.',
        primaryMuscles: ['Lateral (Side) Deltoid'],
        secondaryMuscles: ['Supraspinatus', 'Anterior Deltoid (minor)'],
        replacements: ['Leaning dumbbell lateral raise', 'Machine lateral raise', 'Standard dumbbell lateral raise']
      },
      {
        id: 'mon_5',
        name: 'Overhead Cable Triceps Extension (Rope)',
        sets: 3,
        reps: '10-12',
        rest: 120,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Best exercise for triceps long head (crosses shoulder joint). Arm overhead = long head maximally stretched → stretch-mediated hypertrophy. Face away from cable, split stance. Start with rope behind head, extend forward and upward. Keep upper arms stationary, elbows forward. Do NOT let elbows flare.',
        progression: 'Double progression: 10–12 range. Increase by smallest cable increment.',
        primaryMuscles: ['Triceps Long Head'],
        secondaryMuscles: ['Triceps Lateral Head', 'Triceps Medial Head'],
        replacements: ['Overhead dumbbell triceps extension', 'Incline dumbbell skull crusher', 'Overhead EZ-bar extension']
      },
      {
        id: 'mon_6',
        name: 'Cable Crunch',
        sets: 3,
        reps: '10-15',
        rest: 60,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Progressive overload for rectus abdominis. Kneel below high cable with rope. Hold rope behind/beside head. Keep hips LOCKED — do not sit back. Crunch by flexing the SPINE (not hips). Bring elbows toward knees. Squeeze abs hard at bottom for 1 sec. Breathe out forcefully during crunch.',
        progression: 'Double progression: 12–15 range. Increase cable weight by smallest increment.',
        primaryMuscles: ['Rectus Abdominis (Upper Emphasis)'],
        secondaryMuscles: ['External Obliques (minor)'],
        replacements: ['Decline weighted crunch', 'Ab machine (selectorized)', 'Stability ball crunch with cable']
      }
    ],
    cooldown: 'Light cardio 3–5 min. Chest doorway stretch (30–60 sec). Overhead tricep stretch (30–60 sec each arm). Diaphragmatic breathing 2 min (4 sec in, 7 sec hold, 8 sec out).'
  },

  TUESDAY: {
    day: 'TUESDAY',
    color: '#3A8AFF',
    focus: 'Pull A: Back Width + Rear Delts + Biceps',
    sessionGoal: 'Maximize lat width, develop rear delt roundness, build long head biceps mass, and train forearm extensors.',
    duration: '70–85 minutes',
    warmup: [
      'Light cardio: incline treadmill walk or bike (5 min)',
      'Arm circles forward & backward (10 each direction)',
      'Band pull-aparts (15 reps)',
      'Shoulder dislocations with band (10 reps)',
      'Cat-cow stretches (10 reps)',
      'World\'s greatest stretch (5 per side)'
    ],
    exercises: [
      {
        id: 'tue_1',
        name: 'Wide-Grip Lat Pulldown',
        sets: 3,
        reps: '8-12',
        rest: 150,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Foundational exercise for lat width. Grip 1.5× shoulder width, overhand. Lean back 10–15°. Initiate pull by depressing scapulae. Drive elbows down and back toward hips. Pull to upper chest/collarbone. Squeeze lats at bottom for 1 sec. Full stretch at top — scapulae protracted and elevated.',
        warmupSets: '2 × 12–15 (light)',
        progression: 'Double progression: 8–12 range. Increase by smallest machine increment (2.5 kg).',
        primaryMuscles: ['Latissimus Dorsi (Upper Fibers)', 'Teres Major'],
        secondaryMuscles: ['Rhomboids', 'Mid/Lower Trapezius', 'Biceps', 'Brachialis', 'Posterior Deltoid'],
        replacements: ['Wide-grip weighted pull-up', 'Wide-grip machine pulldown', 'Wide-grip band-assisted pull-up']
      },
      {
        id: 'tue_2',
        name: 'Chest-Supported Machine Row',
        sets: 3,
        reps: '8-12',
        rest: 120,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Eliminates lower back fatigue — chest pad supports torso. 100% lat and upper back focus. Full scapular protraction at stretch (arms fully extended). Pull by retracting scapulae first, then driving elbows back. Squeeze shoulder blades for 1 sec. Keep chest on pad throughout.',
        progression: 'Double progression: 8–12 range.',
        primaryMuscles: ['Latissimus Dorsi', 'Rhomboids', 'Mid Trapezius'],
        secondaryMuscles: ['Teres Major', 'Posterior Deltoid', 'Biceps', 'Brachialis'],
        replacements: ['Chest-supported T-bar row', 'Seal row', 'Chest-supported dumbbell row (incline bench 30–45°)']
      },
      {
        id: 'tue_3',
        name: 'Single-Arm Cable Lat Pulldown (Kneeling)',
        sets: 3,
        reps: '10-12',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Maximum lat stretch — cable allows full overhead stretch. Unilateral for imbalance correction. Kneel facing cable, reach up and slightly across body. Pull handle down to side of torso, driving elbow toward hip. Imagine putting elbow in back pocket. Full extension at top between reps.',
        progression: 'Double progression: 10–12 range. Phase 4: add lengthened partials on last set.',
        primaryMuscles: ['Latissimus Dorsi (Full Length)', 'Teres Major'],
        secondaryMuscles: ['Biceps', 'Brachialis', 'Posterior Deltoid'],
        replacements: ['Single-arm lat pulldown machine', 'Single-arm cable row (low-to-high)', 'Single-arm dumbbell pullover']
      },
      {
        id: 'tue_4',
        name: 'Face Pull (Cable, High Pulley, Rope)',
        sets: 3,
        reps: '12-15',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Gold standard for rear delt + external rotator. Combines horizontal abduction (rear delt) with external rotation (infraspinatus, teres minor). Cable at head height. Pull rope toward face, splitting hands apart. End position: upper arms 90° to torso, forearms vertical ("double bicep pose"). Externally rotate — hands finish at ear level. Squeeze 1–2 sec.',
        progression: 'Double progression: 12–15 range. Always feel rear delts working — if cheating, weight is too heavy.',
        primaryMuscles: ['Posterior Deltoid', 'Infraspinatus', 'Teres Minor'],
        secondaryMuscles: ['Rhomboids', 'Mid Trapezius', 'Lower Trapezius'],
        replacements: ['Rear delt cable fly', 'Band pull-apart (high reps)', 'Prone Y-raise on incline bench']
      },
      {
        id: 'tue_5',
        name: 'Incline Dumbbell Curl',
        sets: 3,
        reps: '8-12',
        rest: 120,
        rpe: '7-8',
        tempo: '3-1-1-1',
        notes: 'Premier exercise for biceps LONG HEAD via stretch-mediated hypertrophy. Bench at 45–60°. Arms hang behind torso — feel bicep stretch. Curl upward, keeping upper arms stationary. Supinate wrists (palms up) during curl. Squeeze at top, lower under strict control (3 sec). Full extension at bottom — the stretch is the entire point.',
        progression: 'Double progression: 8–12 range. Increase by 1–2.5 kg/dumbbell. Phase 4: add lengthened partials on last set.',
        primaryMuscles: ['Biceps Brachii (Long Head Emphasis)'],
        secondaryMuscles: ['Biceps Short Head', 'Brachialis', 'Brachioradialis'],
        replacements: ['Bayesian cable curl', 'Behind-the-body dumbbell curl', 'Preacher curl']
      },
      {
        id: 'tue_6',
        name: 'EZ-Bar Reverse Curl',
        sets: 3,
        reps: '10-12',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Targets brachioradialis and brachialis — biggest forearm muscles. Pronated (overhand) grip on EZ-bar outer curves. Elbows pinned to sides. Curl to just past parallel. Strict form — no body momentum. EZ-bar reduces wrist strain vs straight bar.',
        progression: 'Double progression: 10–12 range.',
        primaryMuscles: ['Brachioradialis', 'Brachialis'],
        secondaryMuscles: ['Biceps Brachii (reduced)', 'Wrist Extensors (isometric)'],
        replacements: ['Cable reverse curl', 'Dumbbell reverse curl', 'Hammer curl with pronated grip at top']
      }
    ],
    cooldown: 'Light cardio 3–5 min. Lat hang (30–60 sec). Bicep wall stretch (30 sec each). Diaphragmatic breathing 2 min.'
  },

  WEDNESDAY: {
    day: 'WEDNESDAY',
    color: '#FF9F1C',
    focus: 'Shoulders + Arms',
    sessionGoal: 'Maximum lateral and rear delt development, bicep long head hypertrophy, tricep long head mass, and direct forearm work.',
    duration: '65–80 minutes',
    warmup: [
      'Light cardio: incline treadmill walk or bike (5 min)',
      'Arm circles forward & backward (10 each direction)',
      'Band pull-aparts (15 reps)',
      'Shoulder dislocations with band (10 reps)',
      'Cat-cow stretches (10 reps)',
      'World\'s greatest stretch (5 per side)'
    ],
    exercises: [
      {
        id: 'wed_1',
        name: 'Cable Lateral Raise (Cross-Body, Behind Hip)',
        sets: 3,
        reps: '10-15',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-0',
        notes: 'Variation of behind-the-body cable lateral. Cross-body fashion — reach across to grab cable from opposite side. Cable crosses behind hip, maximizing lateral delt stretch at bottom. Emphasize stretch — hold brief pause before initiating raise. Phase 4: 4–6 lengthened partials in bottom 1/3 ROM after failure on last set.',
        progression: 'Double progression: 10–15 range. Increase by smallest cable increment.',
        primaryMuscles: ['Lateral (Side) Deltoid'],
        secondaryMuscles: ['Supraspinatus', 'Anterior Deltoid (minor)'],
        replacements: ['Leaning dumbbell lateral raise', 'Machine lateral raise', 'Standard dumbbell lateral raise (seated)']
      },
      {
        id: 'wed_2',
        name: 'Machine Lateral Raise (or Leaning DB Lateral Raise)',
        sets: 3,
        reps: '10-15',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-0',
        notes: 'Second lateral raise variation — additional side delt volume. Machine provides fixed arc of motion for pure delt focus. If no machine: lean away from a pole at ~15° for stretch-loaded DB lateral raise. The lean ensures delt is loaded even at the very bottom.',
        progression: 'Double progression: 10–15 range.',
        primaryMuscles: ['Lateral Deltoid'],
        secondaryMuscles: ['Supraspinatus', 'Anterior Deltoid (minor)'],
        replacements: ['Machine lateral raise', 'Seated dumbbell lateral raise', 'Band lateral raise']
      },
      {
        id: 'wed_3',
        name: 'Reverse Pec Deck (Machine Rear Delt Fly)',
        sets: 3,
        reps: '10-15',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Rear delt isolation via machine-fixed path. Sit facing the pad. Open arms in wide arc — drive with elbows, not hands. Squeeze rear delts and muscles between shoulder blades at end range for 1–2 sec. Full protraction at start (don\'t miss the stretch). Can train to true failure safely.',
        progression: 'Double progression: 10–15 range.',
        primaryMuscles: ['Posterior Deltoid'],
        secondaryMuscles: ['Infraspinatus', 'Teres Minor', 'Rhomboids', 'Mid Trapezius'],
        replacements: ['Bent-over dumbbell rear delt fly', 'Cable rear delt fly', 'Prone rear delt raise on incline bench']
      },
      {
        id: 'wed_4',
        name: 'Bayesian Cable Curl',
        sets: 3,
        reps: '8-12',
        rest: 120,
        rpe: '7-8',
        tempo: '3-1-1-1',
        notes: 'Cable equivalent of incline curl — maximum biceps long head stretch. Face AWAY from low cable. Step forward so arm is pulled behind body. Stand upright, arm fully extended behind you — feel the bicep stretch. Curl forward and up, keeping upper arm stationary. 3 sec eccentric. Full extension at bottom. Phase 4: lengthened partials on last set.',
        progression: 'Double progression: 8–12 range.',
        primaryMuscles: ['Biceps Brachii (Long Head Emphasis)'],
        secondaryMuscles: ['Biceps Short Head', 'Brachialis'],
        replacements: ['Incline dumbbell curl (45–60°)', 'Behind-the-body standing DB curl', 'Cable curl with arm behind']
      },
      {
        id: 'wed_5',
        name: 'Overhead Cable Triceps Extension (Single-Arm)',
        sets: 3,
        reps: '10-12',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Single-arm variation of Day 1\'s overhead extension. Greater ROM (no rope to limit stretch depth). Unilateral — corrects imbalances. Identical mechanics to Day 1 but one arm at a time. Free hand braces against cable frame. Full elbow flexion at stretch (handle behind head). Full extension with hard squeeze.',
        progression: 'Double progression: 10–12 range.',
        primaryMuscles: ['Triceps Long Head'],
        secondaryMuscles: ['Triceps Lateral Head', 'Triceps Medial Head'],
        replacements: ['Single-arm dumbbell overhead extension', 'Bilateral overhead cable extension (rope)', 'Incline skull crusher']
      },
      {
        id: 'wed_6',
        name: 'Wrist Curl + Reverse Wrist Curl Superset',
        sets: 3,
        reps: '15-20 / 12-15',
        rest: 60,
        rpe: '8-9',
        tempo: '2-1-1-0',
        notes: 'SUPERSET for forearm mass. Wrist Curl: Sit, forearms on thighs, wrists over knees. Underhand grip. Let wrists extend fully (bar rolls to fingertips = stretch position). Curl wrists up, squeeze forearm flexors. Reverse Wrist Curl: Same position, overhand grip, lighter weight. Extend wrists up. High reps match forearm fiber type distribution.',
        progression: 'Increase weight gradually. 15–20 range for wrist curls, 12–15 for reverse.',
        primaryMuscles: ['Wrist Flexors', 'Wrist Extensors'],
        secondaryMuscles: ['Forearm Flexors (Flexor Carpi Radialis, Ulnaris)', 'Forearm Extensors (Extensor Carpi Radialis, Digitorum)'],
        replacements: ['Behind-the-back wrist curl', 'Dumbbell wrist curl/extension (single arm)', 'Wrist roller']
      }
    ],
    cooldown: 'Light cardio 3–5 min. Overhead tricep stretch (30 sec each). Bicep wall stretch (30 sec each). Forearm stretch (30 sec each direction). Diaphragmatic breathing 2 min.'
  },

  THURSDAY: {
    day: 'THURSDAY',
    color: '#2EC4B6',
    focus: 'Legs',
    sessionGoal: 'Maximum ROI lower-body development with minimal systemic fatigue impact on upper-body training.',
    duration: '60–75 minutes',
    warmup: [
      'Light cardio: incline treadmill walk or bike (5 min)',
      'Hip circles (10 per direction)',
      'Leg swings (15 each direction)',
      'Bodyweight squats (15 reps)',
      'World\'s greatest stretch (5 per side)',
      'Cat-cow stretches (10 reps)'
    ],
    exercises: [
      {
        id: 'thu_1',
        name: 'Hack Squat',
        sets: 3,
        reps: '8-12',
        rest: 180,
        rpe: '7-8',
        tempo: '3-1-1-0',
        notes: 'Superior to barbell squat for aesthetics — near-zero spinal loading, quad-dominant, no waist-thickening. Feet shoulder-width, toes 15–30° out, LOW on platform for quad emphasis. Back flat against pad. Descend until thighs at/below parallel. Drive through midfoot/heels. Do NOT lock knees at top (maintain quad tension).',
        warmupSets: '2 × 15 (light), 1 × 10 (moderate)',
        progression: 'Double progression: 8–12 range. Increase load when top of range hit on all sets.',
        primaryMuscles: ['Quadriceps (Vastus Lateralis, Vastus Medialis, Rectus Femoris, Vastus Intermedius)'],
        secondaryMuscles: ['Glutes', 'Adductors'],
        replacements: ['Leg press (feet low and close)', 'Pendulum squat', 'Belt squat', 'Smith machine squat (feet forward)']
      },
      {
        id: 'thu_2',
        name: 'Leg Extension',
        sets: 3,
        reps: '10-15',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Only exercise that directly loads rectus femoris at stretch position (hip flexed + knee bent at bottom). Align knee joint with machine axis. Start knees bent as far as machine allows (maximize stretch). Extend until legs straight — squeeze quads hard at top for 1 sec. Control the return. Phase 4: 4–6 lengthened partials in bottom 1/3 ROM on last set.',
        progression: 'Double progression: 10–15 range.',
        primaryMuscles: ['Quadriceps (All Four Heads, Rectus Femoris Emphasis)'],
        secondaryMuscles: [],
        replacements: ['Sissy squat', 'Spanish squat', 'Reverse Nordic curl']
      },
      {
        id: 'thu_3',
        name: 'Dumbbell Romanian Deadlift (RDL)',
        sets: 3,
        reps: '8-12',
        rest: 150,
        rpe: '7-8',
        tempo: '3-1-1-0',
        notes: 'Best hip-hinge for hamstring hypertrophy at long muscle lengths. Dumbbells preferred over barbell (closer to center of mass, less back strain). Slight knee bend (15–20°) maintained throughout. Hinge by pushing hips BACK. Keep dumbbells close to body. Lower until strong hamstring stretch (mid-shin). Neutral spine — NO rounding. Drive hips forward to stand, squeeze glutes at top.',
        progression: 'Double progression: 8–12 range.',
        primaryMuscles: ['Hamstrings (Biceps Femoris Long Head, Semitendinosus, Semimembranosus)'],
        secondaryMuscles: ['Gluteus Maximus', 'Erector Spinae (isometric)'],
        replacements: ['Barbell RDL', 'Single-leg RDL (dumbbell)', 'Good morning (lighter load)']
      },
      {
        id: 'thu_4',
        name: 'Seated Leg Curl',
        sets: 3,
        reps: '10-12',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'SUPERIOR to lying leg curl for hamstring hypertrophy (Maeo et al., 2021). Seated position = hip flexed = hamstrings more stretched (they cross both hip and knee joints). Align knee with machine axis. Start legs fully extended — feel hamstring stretch. Curl heels toward glutes. Squeeze 1 sec at bottom. Phase 4: 4–6 lengthened partials in stretched (legs extended) 1/3 ROM.',
        progression: 'Double progression: 10–12 range.',
        primaryMuscles: ['Hamstrings (All Heads, Biceps Femoris Long Head Emphasis)'],
        secondaryMuscles: ['Gastrocnemius'],
        replacements: ['Lying leg curl', 'Nordic hamstring curl', 'Swiss ball leg curl']
      },
      {
        id: 'thu_5',
        name: 'Standing Calf Raise',
        sets: 3,
        reps: '8-12',
        rest: 90,
        rpe: '7-8',
        tempo: '2-2-1-1',
        notes: 'Targets gastrocnemius (larger, visible calf muscle) with knee straight. Stand on platform edge. Knees straight but NOT locked (5° bend). Lower heels as far below platform as possible — 2 sec pause at bottom (deep stretch). Rise up fully — squeeze hard at top (1 sec hold). No bouncing. Each rep ~5–6 sec total.',
        progression: 'Double progression: 8–12 range.',
        primaryMuscles: ['Gastrocnemius (Medial and Lateral Heads)'],
        secondaryMuscles: ['Soleus'],
        replacements: ['Smith machine calf raise (standing)', 'Leg press calf raise (legs extended)', 'Single-leg bodyweight calf raise']
      },
      {
        id: 'thu_6',
        name: 'Seated Calf Raise',
        sets: 3,
        reps: '12-15',
        rest: 90,
        rpe: '7-8',
        tempo: '2-2-1-1',
        notes: 'Targets soleus (deep calf muscle, most active with knee bent). Predominantly slow-twitch — responds to higher reps and longer TUT. Thigh pad across lower quads. Balls of feet on platform, heels hanging off. Lower heels fully — 2 sec pause in stretch position. Rise up fully — 1 sec hold at top. Slow, controlled reps.',
        progression: 'Double progression: 12–15 range.',
        primaryMuscles: ['Soleus'],
        secondaryMuscles: ['Gastrocnemius (reduced role with bent knees)'],
        replacements: ['Smith machine seated calf raise', 'Leg press calf raise (knees bent)', 'Dumbbell seated calf raise']
      }
    ],
    cooldown: 'Light cardio 3–5 min. Standing quad stretch (30 sec each). Seated hamstring stretch (60 sec). Calf wall stretch (30 sec each). Pigeon stretch for glutes (30 sec each). Diaphragmatic breathing 2 min.'
  },

  FRIDAY: {
    day: 'FRIDAY',
    color: '#9B5DE5',
    focus: 'Upper Width Specialization',
    sessionGoal: 'Maximize lat width, add side delt width, hit rear delts for 3D appearance, and train lower abs.',
    duration: '65–80 minutes',
    warmup: [
      'Light cardio: incline treadmill walk or bike (5 min)',
      'Arm circles forward & backward (10 each direction)',
      'Band pull-aparts (15 reps)',
      'Shoulder dislocations with band (10 reps)',
      'Cat-cow stretches (10 reps)',
      'World\'s greatest stretch (5 per side)'
    ],
    exercises: [
      {
        id: 'fri_1',
        name: 'Close-Grip (Neutral) Lat Pulldown',
        sets: 3,
        reps: '8-12',
        rest: 150,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Different grip from Day 2 — emphasizes LOWER lats ("Christmas tree" detail) and allows greater ROM. V-bar or neutral-grip handle. Lean back ~10°. Pull to sternum/lower chest area. Drive elbows down and BACK past torso for extra lower lat ROM. Squeeze lats 1 sec. Full overhead stretch at top. If 8+ strict pull-ups possible, weighted neutral-grip pull-ups preferred.',
        warmupSets: '2 × 12 (light)',
        progression: 'Double progression: 8–12 range.',
        primaryMuscles: ['Latissimus Dorsi (Lower Fibers Emphasis)', 'Teres Major'],
        secondaryMuscles: ['Rhomboids', 'Biceps', 'Brachialis'],
        replacements: ['Close-grip underhand pulldown', 'Weighted neutral-grip pull-up', 'Straight-arm pulldown']
      },
      {
        id: 'fri_2',
        name: 'Straight-Arm Cable Pulldown',
        sets: 3,
        reps: '10-15',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'ONLY pure lat isolation exercise — removes bicep involvement entirely (elbows stay straight). Critical because biceps often fatigue before lats during pulling. Cable at highest position. Stand 2 feet away, hinge forward 15–20°. Arms start overhead (lats fully stretched). Pull bar down in sweeping arc to upper thighs. Keep elbows nearly straight. Squeeze lats hard at bottom.',
        progression: 'Double progression: 10–15 range.',
        primaryMuscles: ['Latissimus Dorsi (Full Muscle)'],
        secondaryMuscles: ['Teres Major', 'Posterior Deltoid', 'Triceps Long Head (isometric)'],
        replacements: ['Dumbbell pullover', 'Cable pullover', 'Machine pullover (Nautilus-style)']
      },
      {
        id: 'fri_3',
        name: 'Meadows Row (Landmine Single-Arm Row)',
        sets: 3,
        reps: '8-12',
        rest: 120,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Named after John Meadows. Landmine single-arm row that uniquely targets upper lats and teres major with a low-to-high line of pull. Stand perpendicular to barbell in landmine. Stagger stance (closest leg back). Overhand grip on bar end. Drive elbow toward ceiling. Feel upper lat and teres major contract. Lower with control, allowing stretch at bottom.',
        progression: 'Double progression: 8–12 range.',
        primaryMuscles: ['Latissimus Dorsi (Upper Fibers)', 'Teres Major'],
        secondaryMuscles: ['Rhomboids', 'Rear Deltoid', 'Biceps'],
        replacements: ['Single-arm dumbbell row (elbow out, pull toward hip)', 'Single-arm cable row (high-to-low)', 'Single-arm machine row']
      },
      {
        id: 'fri_4',
        name: 'Cable Lateral Raise (Leaning Away, Unilateral)',
        sets: 3,
        reps: '10-15',
        rest: 75,
        rpe: '7-8',
        tempo: '2-1-1-0',
        notes: 'Third lateral raise variation this week. Lean 15–20° AWAY from cable column (hold frame with free hand). Cable crosses in front of body this time (not behind). The lean creates constant tension from the very bottom of the ROM — different resistance profile from behind-body variations. Raise to shoulder height, control eccentric.',
        progression: 'Double progression: 10–15 range.',
        primaryMuscles: ['Lateral (Side) Deltoid'],
        secondaryMuscles: ['Supraspinatus', 'Anterior Deltoid (minor)'],
        replacements: ['Standing dumbbell lateral raise', 'Machine lateral raise', 'Band lateral raise']
      },
      {
        id: 'fri_5',
        name: 'Rear Delt Cable Fly (Standing, Two High Pulleys)',
        sets: 3,
        reps: '10-15',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Two high cables — grab left cable with right hand, right with left (cross over). Start with arms in front, cables crossed — rear delts stretched. Open arms out to sides, driving elbows backward. Full horizontal abduction — squeeze rear delts 1–2 sec. Return slowly, allowing arms to cross again. Stretch-mediated hypertrophy advantage from crossed start position.',
        progression: 'Double progression: 10–15 range.',
        primaryMuscles: ['Posterior Deltoid'],
        secondaryMuscles: ['Infraspinatus', 'Rhomboids', 'Mid Trapezius'],
        replacements: ['Bent-over dumbbell rear delt fly', 'Reverse pec deck', 'Prone rear delt raise on incline bench']
      },
      {
        id: 'fri_6',
        name: 'Hanging Leg Raise',
        sets: 3,
        reps: '10-15',
        rest: 60,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Lower abs emphasis via posterior pelvic tilt. Hang from bar, arms fully extended. Begin with posterior pelvic tilt (tuck pelvis under). Raise legs by CURLING the pelvis upward — not just lifting legs. Key distinction: without pelvic tilt = hip flexors; WITH pelvic tilt = abs. Raise legs past parallel. Lower with control — no swinging. Also improves grip endurance (forearm bonus) and decompresses spine.',
        progression: 'Progress from hanging knee raises → straight leg raises → weighted.',
        primaryMuscles: ['Rectus Abdominis (Lower Fiber Emphasis via Pelvic Tilt)'],
        secondaryMuscles: ['Hip Flexors (Iliopsoas, Rectus Femoris)', 'Obliques'],
        replacements: ['Captain\'s chair leg raise', 'Lying leg raise', 'Reverse crunch (flat bench)']
      }
    ],
    cooldown: 'Light cardio 3–5 min. Lat hang (30–60 sec). Chest doorway stretch (30 sec). Diaphragmatic breathing 2 min.'
  },

  SATURDAY: {
    day: 'SATURDAY',
    color: '#E63946',
    focus: 'Upper Density + Arms',
    sessionGoal: 'Build back thickness, add upper chest volume, complete arm development with emphasis on brachialis/lateral triceps, and train forearm grip.',
    duration: '70–85 minutes',
    warmup: [
      'Light cardio: incline treadmill walk or bike (5 min)',
      'Arm circles forward & backward (10 each direction)',
      'Band pull-aparts (15 reps)',
      'Shoulder dislocations with band (10 reps)',
      'Cat-cow stretches (10 reps)',
      'World\'s greatest stretch (5 per side)'
    ],
    exercises: [
      {
        id: 'sat_1',
        name: 'Barbell Row (Pendlay-Style or Bent-Over)',
        sets: 3,
        reps: '6-10',
        rest: 150,
        rpe: '7-8',
        tempo: '2-1-1-0',
        notes: 'Premier back thickness exercise. Placed on Day 6 (day before rest) for full recovery from systemic fatigue. Pendlay-style preferred (from floor, torso parallel — strict form, dead-stop reset). Grip slightly wider than shoulder width, overhand. Torso at 45–90° to floor. Pull to lower chest/upper abdomen. Drive elbows toward ceiling. Squeeze shoulder blades 1 sec. Flat back, braced core.',
        warmupSets: '2 × 12 (light)',
        progression: 'Double progression: 6–10 range.',
        primaryMuscles: ['Rhomboids', 'Mid/Lower Trapezius', 'Latissimus Dorsi'],
        secondaryMuscles: ['Posterior Deltoid', 'Biceps', 'Brachialis', 'Erector Spinae (isometric)'],
        replacements: ['Seal row', 'T-bar row', 'Machine row']
      },
      {
        id: 'sat_2',
        name: 'Low-Incline Smith Machine Press (15–20°)',
        sets: 3,
        reps: '8-12',
        rest: 120,
        rpe: '7-8',
        tempo: '2-1-1-0',
        notes: 'Second chest pressing movement of the week (different from Day 1\'s 30° DB press). Smith machine chosen intentionally: fixed bar path for pure pressing focus, no stabilization demand (after fatiguing barbell row), can safely train to failure. Low incline (15–20°) still targets upper chest while incorporating more sternal fibers. Retract/depress scapulae. Touch chest lightly — no bouncing.',
        progression: 'Double progression: 8–12 range.',
        primaryMuscles: ['Clavicular and Sternal Pectoralis Major'],
        secondaryMuscles: ['Anterior Deltoid', 'Triceps'],
        replacements: ['Incline dumbbell press (30°, different angle from Day 1)', 'Incline machine press', 'Flat machine press']
      },
      {
        id: 'sat_3',
        name: 'Seated Dumbbell Lateral Raise (Slight Forward Lean)',
        sets: 3,
        reps: '10-15',
        rest: 75,
        rpe: '7-8',
        tempo: '2-1-1-0',
        notes: 'Fourth lateral raise variation of the week. SEATED eliminates ALL leg/hip momentum (strictest form). Forward lean ~15–20° shifts resistance to slightly favor posterior fibers of lateral delt, creating more "3D" stimulus. Different from cable laterals used other days — prevents neural accommodation. Raise laterally, lead with elbows, stop at shoulder height.',
        progression: 'Double progression: 10–15 range.',
        primaryMuscles: ['Lateral Deltoid (with slight Posterior Fiber Bias from lean)'],
        secondaryMuscles: ['Posterior Deltoid (minor)', 'Supraspinatus'],
        replacements: ['Standing dumbbell lateral raise', 'Cable lateral raise', 'Machine lateral raise']
      },
      {
        id: 'sat_4',
        name: 'Cross-Body Hammer Curl (Dumbbell)',
        sets: 3,
        reps: '8-12',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Targets brachialis and brachioradialis — arm thickness and forearm size muscles. Neutral grip (palms facing body). Curl one dumbbell across body toward opposite shoulder. Elbow pinned to side — no flare. Squeeze brachialis 1 sec at top. Alternate arms. Keep wrist neutral throughout (do NOT supinate).',
        progression: 'Double progression: 8–12 range.',
        primaryMuscles: ['Brachialis', 'Brachioradialis'],
        secondaryMuscles: ['Biceps Brachii (Long Head)'],
        replacements: ['Standard hammer curl', 'Rope cable hammer curl', 'Preacher hammer curl']
      },
      {
        id: 'sat_5',
        name: 'Triceps Pushdown (V-Bar or Rope)',
        sets: 3,
        reps: '8-12',
        rest: 90,
        rpe: '7-8',
        tempo: '2-1-1-1',
        notes: 'Targets lateral and medial heads of triceps — complements overhead extensions (Days 1 & 3) which target long head. Lateral head = most visible from front, creates "horseshoe." Cable at highest position. Pin elbows to sides (stationary). Press handle down to full extension, squeeze hard; if rope, spread ends apart at bottom. Return until forearms slightly past parallel. Do NOT let elbows drift forward. Phase 4: drop set on last set.',
        progression: 'Double progression: 8–12 range.',
        primaryMuscles: ['Triceps Lateral Head', 'Triceps Medial Head'],
        secondaryMuscles: ['Triceps Long Head (reduced role)'],
        replacements: ['Cable kickback', 'Close-grip machine press', 'Dumbbell kickback']
      },
      {
        id: 'sat_6',
        name: 'Farmer\'s Walk (or Plate Pinch Hold)',
        sets: 3,
        reps: '30-45 sec',
        rest: 90,
        rpe: '8-9',
        tempo: 'N/A',
        notes: 'Most comprehensive forearm/grip exercise. Trains finger flexors, wrist flexors, wrist extensors (isometric), and brachioradialis simultaneously under heavy load. Also improves core stability and posture. Grab two heavy dumbbells. Stand tall — shoulders down and back, chest up, core braced. Walk in controlled pace for 30–45 sec. Grip as hard as possible (active crushing grip). Record weight and time — increase one or both each week.',
        progression: 'Increase weight or duration each week.',
        primaryMuscles: ['Finger Flexors', 'Wrist Flexors', 'Wrist Extensors (isometric)', 'Brachioradialis'],
        secondaryMuscles: ['Upper Trapezius', 'Rhomboids', 'Core (isometric)'],
        replacements: ['Plate pinch hold', 'Dead hang from pull-up bar (max time)', 'Fat grip dumbbell hold']
      }
    ],
    cooldown: 'Light cardio 3–5 min. Lat hang (30–60 sec). Chest doorway stretch (30 sec). Overhead tricep stretch (30 sec each). Bicep wall stretch (30 sec each). Diaphragmatic breathing 2 min.'
  },

  SUNDAY: {
    day: 'SUNDAY',
    color: '#6B7280',
    focus: 'REST DAY — Active Recovery',
    sessionGoal: 'Complete recovery from weights. Light activity to promote recovery.',
    duration: 'N/A',
    warmup: [],
    exercises: [
      {
        id: 'sun_1',
        name: 'Active Recovery',
        sets: 1,
        reps: 'N/A',
        rest: 0,
        rpe: 'N/A',
        tempo: 'N/A',
        notes: 'NO resistance training — complete rest from weights. 20–30 minute walk (preferably outdoors for vitamin D and stress reduction). Light foam rolling (5–10 min on tight areas). Gentle yoga or mobility flow (15–20 min). Stomach vacuum practice (3–5 sets of 20–30 sec holds).',
        primaryMuscles: [],
        secondaryMuscles: [],
        replacements: []
      }
    ],
    cooldown: 'Gentle full-body stretching. Diaphragmatic breathing 5 min.'
  }
};


// ─────────────────────────────────────────────────────────
// 16-WEEK PERIODIZATION PLAN
// ─────────────────────────────────────────────────────────

const periodizationPlan = {
  overview: {
    duration: '16 weeks (4 mesocycles × 4 weeks)',
    trainingDays: 6,
    restDays: 1,
    exercisesPerSession: 6,
    sessionDuration: '60–90 minutes',
    deloadWeeks: [8, 12],
    progressionModel: 'Undulating block periodization with linear volume progression',
    overloadMethod: 'Double Progression (reps first, then load)'
  },
  phases: [
    {
      name: 'Phase 1: Foundation',
      weeks: '1–4',
      focus: 'Technique mastery, mind-muscle connection, baseline establishment',
      setsPerExercise: 2,
      rir: '3–4',
      repRangeCompounds: '8–12',
      repRangeIsolation: '12–15',
      tempo: 'Controlled eccentrics (2–3 sec), controlled concentrics (1 sec)',
      restCompounds: '2:00–2:30 min',
      restIsolation: '1:30 min',
      intensityTechniques: 'None',
      keyFocus: 'QUALITY over intensity. Every rep technically perfect. Video yourself to assess form. By Week 4, strong MMC with every target muscle.',
      volumeTargets: {
        sideDelts: '~12 sets',
        lats: '~10 sets',
        chest: '~8 sets',
        biceps: '~6 direct sets',
        triceps: '~6 direct sets'
      }
    },
    {
      name: 'Phase 2: Accumulation',
      weeks: '5–8 (Week 8 = DELOAD)',
      focus: 'Volume increase, load progression, accumulation',
      setsPerExercise: 3,
      rir: '2–3',
      repRangeCompounds: '8–10',
      repRangeIsolation: '10–15',
      tempo: 'Slightly slower eccentrics on key exercises (3 sec)',
      restCompounds: '2:00–2:30 min',
      restIsolation: '1:30–2:00 min',
      intensityTechniques: 'None',
      deload: {
        week: 8,
        protocol: 'Reduce volume 50% (3 sets → 1–2 sets/exercise). Same exercises. Same WEIGHT. RIR 4–5 (easy effort). Same schedule (6 days/week). Purpose: dissipate fatigue, connective tissue recovery, replenish glycogen, reset neural fatigue.'
      },
      volumeTargets: {
        sideDelts: '~15 sets',
        lats: '~14 sets',
        chest: '~10 sets',
        biceps: '~8 direct sets',
        triceps: '~8 direct sets'
      }
    },
    {
      name: 'Phase 3: Intensification',
      weeks: '9–12 (Week 12 = DELOAD)',
      focus: 'Near-failure training, heavier loads, lengthened partials introduced',
      setsPerExercise: '3 (priority muscles: 3–4)',
      rir: '1–2',
      repRangeCompounds: '6–10',
      repRangeIsolation: '10–12',
      tempo: '3-sec eccentrics on stretch exercises, 1-sec pause at stretch position',
      restCompounds: '2:30–3:00 min',
      restIsolation: '1:30–2:00 min',
      intensityTechniques: 'Lengthened partials on LAST set of: cable lateral raises, incline DB curls, Bayesian curls, overhead tricep extensions, leg extensions, seated leg curls. After concentric failure, 4–6 partial reps in stretched (bottom) portion of ROM.',
      deload: {
        week: 12,
        protocol: 'Same as Week 8 deload: 50% volume reduction, same exercises, same weight, RIR 4–5.'
      },
      volumeTargets: {
        sideDelts: '~17 sets',
        lats: '~16 sets',
        chest: '~10 sets',
        biceps: '~9 direct sets',
        triceps: '~9 direct sets'
      }
    },
    {
      name: 'Phase 4: Peak',
      weeks: '13–16 (No deload — final push)',
      focus: 'Maximum effort, full intensity techniques, peak volume, metabolic stress',
      setsPerExercise: '3–4 (priority muscles get 4 on some exercises)',
      rir: '0–1',
      repRangeCompounds: '6–10',
      repRangeIsolation: '10–20',
      tempo: 'Varied — controlled eccentrics on stretch exercises, faster concentrics on pump exercises',
      restCompounds: '2:30–3:00 min',
      restIsolation: '1:00–1:30 min (shorter rest for metabolic stress)',
      intensityTechniques: 'Lengthened partials (all stretch exercises), Drop sets (machine exercises — last set: failure, reduce weight 20–30%, continue to failure), Myo-reps (cable lateral raises Day 5, cable crunches — activation set to failure, then 3–5 mini-sets of 3–5 reps with 15 sec rest)',
      volumeTargets: {
        sideDelts: '~19 sets',
        lats: '~21 sets',
        chest: '~12 sets',
        biceps: '~10 direct sets',
        triceps: '~10 direct sets'
      }
    }
  ]
};


// ─────────────────────────────────────────────────────────
// NUTRITION BLUEPRINT
// ─────────────────────────────────────────────────────────

const nutritionPlan = {
  approach: 'Lean Bulk',
  rationale: 'At 18, testosterone is near lifetime peak — optimal hormonal window for muscle growth. Caloric surplus required to maximize 1–2 lbs of muscle gain per month.',
  daily: {
    calories: { target: 3350, unit: 'kcal', range: 'TDEE + 250–350 kcal', reason: 'Lean Bulk — build muscle with minimal fat gain' },
    protein: { target: 150, unit: 'g', range: '2.0 g/kg bodyweight', reason: 'Maximum MPS (Schoenfeld & Aragon, 2018; Morton et al., 2018)' },
    carbs: { target: 519, unit: 'g', range: 'Remaining calories', reason: 'Primary fuel for high-intensity resistance training, glycogen replenishment, muscle fullness and pump' },
    fat: { target: 75, unit: 'g', range: '1.0 g/kg bodyweight', reason: 'Testosterone synthesis, hormonal health, fat-soluble vitamin absorption' },
    water: { target: 4, unit: 'liters', range: '3.5–4.5 L/day', reason: 'Muscle performance, fullness (muscles are ~75% water), nutrient transport, vascularity' },
    fiber: { target: 35, unit: 'g', range: '25–40 g/day', reason: 'Digestive health. Do not exceed 50g/day.' }
  },
  weeklyWeightGainTarget: '0.25–0.5 lbs (0.1–0.2 kg) per week',
  sixteenWeekTotalGain: '4–8 lbs (1.8–3.6 kg) total body weight, ~60–70% muscle',
  calorieAdjustments: [
    { weeks: '1–4', instruction: 'Start at TDEE + 250 kcal' },
    { weeks: '5–8', instruction: 'If weight is NOT increasing 0.25–0.5 lbs/week, add 100 kcal' },
    { weeks: '9–12', instruction: 'Adjust as needed to maintain 0.25–0.5 lbs/week gain' },
    { weeks: '13–16', instruction: 'Maintain or slight reduction if body fat exceeds comfort level' }
  ],
  meals: [
    {
      name: 'Meal 1 (Morning)',
      timing: '7:00–8:00 AM',
      purpose: 'Break overnight fast, replenish glycogen',
      protein: 35,
      carbs: 100,
      fat: 18,
      calories: 700,
      items: 'Protein + carbs + moderate fat. Example: 3 whole eggs + 3 egg whites scrambled, 100 g oats with banana, 1 tbsp peanut butter'
    },
    {
      name: 'Meal 2 (Pre-Workout)',
      timing: '1.5–2 hrs before training',
      purpose: 'Maximize muscle glycogen, fuel performance, amino acids in bloodstream during training',
      protein: 38,
      carbs: 75,
      fat: 8,
      calories: 520,
      items: '30–40g protein + 60–80g carbs + <10g fat. Example: 200 g chicken breast + 200 g white rice + banana'
    },
    {
      name: 'Post-Workout Shake',
      timing: 'Within 30–60 min after training',
      purpose: 'Spike insulin, maximize MPS, replenish glycogen. The "anabolic window" is real but wider than thought (~4–6 hours from pre-workout meal).',
      protein: 42,
      carbs: 70,
      fat: 5,
      calories: 490,
      items: '30–50g whey protein + 60–80g high-GI carbs + 5g creatine. Example: Whey shake + banana + honey + creatine'
    },
    {
      name: 'Meal 3 (Afternoon/Evening)',
      timing: '6:00–7:30 PM',
      purpose: 'Sustained MPS, satiety',
      protein: 40,
      carbs: 80,
      fat: 22,
      calories: 680,
      items: 'Protein + carbs + moderate fat. Example: 150 g salmon, 200 g sweet potato, mixed salad with avocado (1/2), 1 tbsp olive oil'
    },
    {
      name: 'Meal 4 (Before Bed)',
      timing: '9:00–10:00 PM',
      purpose: 'Overnight MPS — slow-digesting protein (casein) sustains amino acid delivery during sleep (Res et al., 2012)',
      protein: 35,
      carbs: 20,
      fat: 12,
      calories: 330,
      items: 'Slow protein + minimal carbs. Example: 250 g cottage cheese, 15 g chia seeds, drizzle of honey, 30g casein shake'
    }
  ],
  proteinSources: [
    'Chicken breast',
    'Lean beef/turkey',
    'Eggs (whole + whites)',
    'Greek yogurt',
    'Whey protein (post-workout)',
    'Fish (salmon, tilapia, tuna)',
    'Cottage cheese (casein — before bed)',
    'Lentils/beans (supplementary)'
  ],
  carbSources: [
    { source: 'Oats, sweet potato, rice', when: 'Pre-workout (1–2 hrs before)', gi: 'Medium-High' },
    { source: 'White rice, banana, white bread', when: 'Post-workout (within 1 hr)', gi: 'High' },
    { source: 'Brown rice, quinoa, pasta', when: 'Other meals', gi: 'Medium' },
    { source: 'Vegetables, fruit', when: 'All meals', gi: 'Low-Medium' }
  ],
  fatSources: [
    'Olive oil, avocado oil',
    'Nuts (almonds, walnuts, cashews)',
    'Avocado',
    'Fatty fish (salmon — omega-3s)',
    'Eggs',
    'Dark chocolate (70%+)',
    'Nut butters'
  ],
  electrolytes: {
    sodium: { target: '2,000–4,000 mg/day', sources: 'Table salt, soy sauce, pickles' },
    potassium: { target: '3,500–4,700 mg/day', sources: 'Bananas, potatoes, avocado, spinach' },
    magnesium: { target: '400–500 mg/day', sources: 'Supplement (glycinate), nuts, dark chocolate' }
  },
  hydrationProtocol: [
    '500 ml upon waking',
    '500 ml with each meal',
    '500–750 ml during training (sipped throughout)',
    '500 ml before bed'
  ],
  supplements: [
    // Tier 1: Essential (Strong Evidence)
    { name: 'Creatine Monohydrate', dose: '5g/day, every day', timing: 'Any time; post-workout with carbs may improve uptake', reason: 'Increases intramuscular phosphocreatine → more ATP → more reps → more hypertrophy. Increased cell hydration (muscles look fuller). Evidence Grade: A+', tier: 1, optional: false },
    { name: 'Whey Protein', dose: '25–40g per serving, 1–2 servings/day', timing: 'Post-workout and/or as needed to hit protein targets', reason: 'Rapidly digested, high in leucine (primary MPS trigger). Convenience supplement — not superior to whole food protein. Evidence Grade: A', tier: 1, optional: false },
    { name: 'Caffeine', dose: '3–6 mg/kg (225–450 mg for 75 kg)', timing: '30–60 min pre-workout. Avoid after 2 PM.', reason: 'Reduces perceived effort, increases alertness, improves force production, delays fatigue. Cycle 2 weeks on / 1 week off. Evidence Grade: A', tier: 1, optional: false },

    // Tier 2: Beneficial (Moderate Evidence)
    { name: 'Citrulline Malate', dose: '6–8g', timing: '30–60 min pre-workout', reason: 'Precursor to L-arginine → increased nitric oxide → improved blood flow → enhanced muscle pump, reduced fatigue. 1–3 additional reps per set. Dramatically improves the "pump." Evidence Grade: B+', tier: 2, optional: true },
    { name: 'Fish Oil (Omega-3)', dose: '2–3g EPA+DHA combined/day', timing: 'With meals', reason: 'Anti-inflammatory, reduces DOMS, may improve MPS response. Strong evidence for general health. Evidence Grade: B', tier: 2, optional: true },
    { name: 'Vitamin D3', dose: '2,000–5,000 IU/day', timing: 'With a fat-containing meal', reason: 'Steroid hormone precursor. Supports testosterone, immune function, bone health, muscle function. Deficiency extremely common (especially indoor trainers). Evidence Grade: B+', tier: 2, optional: true },
    { name: 'Magnesium (Glycinate)', dose: '200–400 mg elemental', timing: 'Before bed', reason: 'Supports sleep quality, muscle relaxation, protein synthesis, testosterone production. Many athletes are deficient. Evidence Grade: B', tier: 2, optional: true },

    // Tier 3: Optional (Weak-Moderate Evidence)
    { name: 'Beta-Alanine', dose: '3.2–6.4g/day (split into 2 doses)', timing: 'Any time', reason: 'Increases intramuscular carnosine → buffers hydrogen ions → delays acidosis. Most beneficial for 15–30 rep sets. Minor benefit for 6–12 rep ranges. Causes tingling (harmless). Evidence Grade: B-', tier: 3, optional: true },
    { name: 'Ashwagandha (KSM-66)', dose: '600 mg/day (300 mg 2×/day)', timing: 'Morning and evening', reason: 'May reduce cortisol, improve testosterone, reduce stress, improve sleep. Modest effects. Evidence Grade: B-', tier: 3, optional: true }
  ],
  supplementsToAvoid: [
    { name: 'L-Arginine ("NO Boosters")', reason: 'Poor oral bioavailability — most broken down in liver. Use citrulline malate instead. Grade: C-' },
    { name: 'BCAAs', reason: 'Zero additional benefit if protein intake is adequate (1.6–2.2 g/kg/day). Literally a subset of amino acids you already consume. Grade: D' },
    { name: 'Testosterone Boosters (Tribulus, Fenugreek, D-Aspartic Acid)', reason: 'No OTC "test booster" consistently increases testosterone in healthy young males. Useless if 18 with normal hormones. Grade: D' }
  ],
  mealTiming: {
    preTraining: 'Protein + high carbs + low fat, 1.5–2 hours before training. Provides amino acids during training + muscle glycogen for performance.',
    postTraining: 'Rapid amino acid delivery + insulin spike for glycogen replenishment. Within 30–60 min (anabolic window is ~4–6 hours from pre-workout meal).',
    night: 'Slow-digesting protein (casein/cottage cheese) for overnight MPS. 30–40g casein before bed (Res et al., 2012).'
  },
  recovery: {
    sleep: {
      duration: '8–9 hours per night (non-negotiable for 18-year-old in high-volume program)',
      hygiene: [
        'Same bedtime and wake time every day (±30 min), including rest day',
        'Blackout curtains or sleep mask; eliminate all light sources',
        'Room temperature 65–68°F / 18–20°C',
        'No screens 60 min before bed (blue light suppresses melatonin)',
        'Magnesium glycinate 200–400mg, 30–60 min before bed',
        'Pre-bed protein: 30–40g casein or cottage cheese',
        'No caffeine after 2 PM (half-life 5–7 hours)',
        'Limit alcohol (reduces REM sleep and GH secretion)'
      ]
    },
    vacuumTraining: {
      description: 'Train the transverse abdominis — the deep "corset" muscle. Regular practice measurably reduces resting waist circumference, directly enhancing V-taper.',
      frequency: 'Daily',
      protocol: [
        'Stand upright or kneel on all fours',
        'Exhale all air completely',
        'Draw belly button toward spine as hard as possible',
        'Hold 20–30 sec (build up to 60 sec)',
        'Breathe shallowly through chest while maintaining vacuum',
        'Release and rest 30 sec',
        'Repeat 3–5 sets'
      ],
      when: ['Morning upon waking (empty stomach)', 'Between sets during rest periods', 'Before bed'],
      expectedResults: 'Noticeable waist tightening within 4–6 weeks.'
    },
    activeRecovery: 'Rest day (Sunday): 20–30 min walk (outdoors preferred for vitamin D/stress reduction), light foam rolling (5–10 min), gentle yoga or mobility flow (15–20 min). NO resistance training.',
    stressManagement: [
      'Training itself — powerful stress reliever',
      'Sleep — foundation of stress resilience',
      'Social connection — friends/family time',
      'Mindfulness/meditation — 5–10 min daily',
      'Time in nature — walks, sunlight',
      'Limit social media — especially fitness comparison (often enhanced/non-natural physiques)'
    ],
    fatigueMonitoring: {
      dailyIndicators: ['Sleep quality (1–10)', 'Energy level (1–10)', 'Motivation to train (1–10)', 'Joint comfort (1–10)', 'Muscle soreness (1–10)', 'Appetite (1–10)', 'Mood (1–10)'],
      averageAbove7: 'Recovery excellent — proceed as programmed.',
      average5to7: 'Recovery adequate — monitor closely.',
      averageBelow5for3days: 'Consider unscheduled deload or extra rest day.',
      unscheduledDeload: 'If 3+ indicators below 5 for 3+ days AND performance declining: take 3–5 day deload (50% volume, same load, RIR 4–5).'
    },
    injuryPrevention: [
      'Never sacrifice form for load — ego lifting is #1 injury cause',
      'Warm up thoroughly — especially shoulders (most vulnerable joint)',
      'Face pulls every pulling day for rotator cuff health',
      'More pulling than pressing volume (appropriate for shoulder health)',
      'If exercise causes joint pain (not muscle soreness), substitute immediately',
      'Progressive overload GRADUALLY — small increments (2.5 kg compounds, 1–2 kg isolation)',
      'Deload proactively at Weeks 8 and 12'
    ],
    deload: 'Scheduled at Weeks 8 and 12. Reduce volume by 50%, maintain same exercises and weight, RIR 4–5, keep same 6-day schedule.'
  }
};


// ─────────────────────────────────────────────────────────
// MUSCLE PRIORITY & FREQUENCY TABLE
// ─────────────────────────────────────────────────────────

const musclePriority = [
  { muscle: 'Side Delts', frequency: '4×/week', weeklySetRange: '15–19', priority: 1, rationale: 'Highest priority — single most important muscle for visual shoulder width and V-taper. Small muscle, recovers fast.' },
  { muscle: 'Rear Delts', frequency: '3×/week', weeklySetRange: '9', priority: 2, rationale: 'Critical for 3D delts and side-view roundness. Small, fast recovery.' },
  { muscle: 'Lats', frequency: '3×/week', weeklySetRange: '14–21', priority: 3, rationale: 'V-taper width foundation. Large muscle that handles substantial volume.' },
  { muscle: 'Biceps', frequency: '3×/week', weeklySetRange: '7–10 direct + indirect', priority: 4, rationale: 'Arm size priority. Stretch-emphasis exercises (incline curls, Bayesian curls).' },
  { muscle: 'Triceps', frequency: '3×/week', weeklySetRange: '7–10 direct + indirect', priority: 5, rationale: 'Arm size priority. Overhead extensions for long head stretch.' },
  { muscle: 'Forearms', frequency: '3×/week', weeklySetRange: '8–9 direct + indirect', priority: 6, rationale: 'Direct + indirect volume. Reverse curls, wrist curls, farmer\'s walks.' },
  { muscle: 'Upper Back', frequency: '2–3×/week', weeklySetRange: '6–9', priority: 7, rationale: 'Thickness and postural aesthetics.' },
  { muscle: 'Upper Chest', frequency: '2×/week', weeklySetRange: '6–9', priority: 8, rationale: 'Chest shelf visual impact. 30° incline preferred.' },
  { muscle: 'Mid Chest', frequency: '1–2×/week', weeklySetRange: '4–6', priority: 9, rationale: 'Fullness from flat/slight incline pressing.' },
  { muscle: 'Abs', frequency: '2×/week', weeklySetRange: '4–6', priority: 10, rationale: 'Visible, defined abs — NOT thick, blocky. Moderate volume + daily vacuum training.' },
  { muscle: 'Front Delts', frequency: '0× direct', weeklySetRange: '~5–8 indirect', priority: 11, rationale: 'Sufficient indirect from 5 days of pressing. Direct work risks overuse and shoulder imbalance.' },
  { muscle: 'Quads', frequency: '1×/week', weeklySetRange: '4–6', priority: 12, rationale: 'One leg day constraint.' },
  { muscle: 'Hamstrings', frequency: '1×/week', weeklySetRange: '4–6', priority: 13, rationale: 'One leg day constraint.' },
  { muscle: 'Calves', frequency: '1×/week', weeklySetRange: '6–8', priority: 14, rationale: 'One leg day constraint. Both standing (gastroc) and seated (soleus) for complete development.' }
];


export { workoutData, nutritionPlan, periodizationPlan, musclePriority };
