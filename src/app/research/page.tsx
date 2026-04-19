import Image from 'next/image';

export default function Page() {
    return (
        <main className="min-h-screen bg-stone-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-6xl font-bold mb-16 leading-tight max-w-6xl">
                    Research: The Effect of Incorporating Motor Current Feedback in an Imitation Learning Policy for a Multi-DOF Robot
                </h1>

                <div className="space-y-24">
                    <section className="max-w-4xl space-y-6">
                        <p className="text-stone-200 leading-relaxed text-lg">
                            Traditional imitation learning for contact-rich manipulation usually uses images and joint positions.
                            This project tests whether gripper motor current, a low-cost proxy for force, when added to an ACT policy improves performance in
                            a task sorting identical soft-vs-hard cubes.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-24">
                            <div className='space-y-6'>
                                <div className='space-y-6'>
                                    <h2 className="text-3xl font-semibold text-sky-400">hypothesis + task</h2>
                                    <p className="text-white leading-relaxed text-lg">
                                        If motor current feedback is included as an input, task accuracy should improve. The robot picks
                                        a cube from a fixed point and places it left for soft TPU and right for hard PLA.
                                    </p>
                                </div>
                                <div className='space-y-6'>
                                    <h3 className="text-2xl font-semibold text-stone-200">materials</h3>
                                    <ul className="list-disc pl-6 text-white leading-relaxed text-lg space-y-2">
                                        <li>2 SO-101 arms (leader + follower)</li>
                                        <li>Logitech C920x webcam</li>
                                        <li>LeRobot by Hugging Face</li>
                                        <li>Google Colab for training</li>
                                        <li>1.5 inch TPU and PLA cubes</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='space-y-6'>
                                <h2 className="text-3xl font-semibold text-emerald-400">model + data collection</h2>
                                <p className="text-white leading-relaxed text-lg">
                                    The model uses Action Chunking Transformer (ACT), which predicts action chunks to reduce
                                    compounding error. This version appends gripper current to image and joint-state inputs.
                                </p>
                                <p className="text-white leading-relaxed text-lg">
                                    Data came from teleoperated 15-second demonstrations at 30 Hz, recording webcam frames, 6-DOF
                                    joint states, and gripper current. Total training set: 56 recordings.
                                </p>
                            </div>
                        </div>
                        <Image
                            src="/research/robot-setup.png"
                            alt="Robot setup with leader and follower arms"
                            width={500}
                            height={400}
                            className="w-full rounded-lg"
                        />

                    </section>

                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <Image
                            src="/research/model-architecture.png"
                            alt="ACT model architecture with gripper current input"
                            width={500}
                            height={400}
                            className="w-full rounded-lg"
                        />
                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold text-amber-400">training + inference</h2>
                            <p className="text-white leading-relaxed text-lg">
                                Baseline and current-augmented models were trained in Colab (about 7 hours each on NVIDIA A100).
                                For baseline control, motor current values were replaced with zeros.
                            </p>
                            <p className="text-white leading-relaxed text-lg">
                                At inference time, the policy generates 100-step chunks every 100 timesteps. Chunk generation is
                                about 0.176s and chunk execution about 3.33s at 30 Hz.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-semibold text-cyan-400">training + inference gifs</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-stone-200">PLA</h3>
                                <figure className="w-full">
                                    <img
                                        src="/research/pla-training.gif"
                                        alt="PLA training run"
                                        className="w-full rounded-lg aspect-video object-cover"
                                    />
                                    <figcaption className="text-sm text-stone-400 mt-2">PLA training</figcaption>
                                </figure>
                                <figure className="w-full">
                                    <img
                                        src="/research/pla-inference.gif"
                                        alt="PLA inference run"
                                        className="w-full rounded-lg aspect-video object-cover"
                                    />
                                    <figcaption className="text-sm text-stone-400 mt-2">PLA inference</figcaption>
                                </figure>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-stone-200">TPU</h3>
                                <figure className="w-full">
                                    <img
                                        src="/research/tpu-training.gif"
                                        alt="TPU training run"
                                        className="w-full rounded-lg aspect-video object-cover"
                                    />
                                    <figcaption className="text-sm text-stone-400 mt-2">TPU training</figcaption>
                                </figure>
                                <figure className="w-full">
                                    <img
                                        src="/research/tpu-inference.gif"
                                        alt="TPU inference run"
                                        className="w-full rounded-lg aspect-video object-cover"
                                    />
                                    <figcaption className="text-sm text-stone-400 mt-2">TPU inference</figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-4 max-w-4xl">
                            <h2 className="text-3xl font-semibold text-rose-400">results</h2>
                            <p className="text-white leading-relaxed text-lg">
                                Motor current feedback improved total accuracy from 77.5% to 95%, supporting the hypothesis that
                                current adds useful contact information for distinguishing soft vs hard objects.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="overflow-x-auto rounded-lg border border-stone-600 bg-stone-700/40">
                                <table className="w-full text-left text-sm sm:text-base">
                                    <thead className="bg-stone-900/70 text-stone-100">
                                        <tr>
                                            <th className="px-4 py-3">Model</th>
                                            <th className="px-4 py-3">TPU</th>
                                            <th className="px-4 py-3">PLA</th>
                                            <th className="px-4 py-3">Successes</th>
                                            <th className="px-4 py-3">Failures</th>
                                            <th className="px-4 py-3">Accuracy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-stone-600/60">
                                            <td className="px-4 py-3 font-medium">Baseline ACT</td>
                                            <td className="px-4 py-3">15/20</td>
                                            <td className="px-4 py-3">16/20</td>
                                            <td className="px-4 py-3">31</td>
                                            <td className="px-4 py-3">9</td>
                                            <td className="px-4 py-3">77.5%</td>
                                        </tr>
                                        <tr className="border-t border-stone-600/60 bg-stone-900/20">
                                            <td className="px-4 py-3 font-medium">Current-Augmented ACT</td>
                                            <td className="px-4 py-3">20/20</td>
                                            <td className="px-4 py-3">19/20</td>
                                            <td className="px-4 py-3">39</td>
                                            <td className="px-4 py-3">1</td>
                                            <td className="px-4 py-3">95%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                                <figure className="w-full">
                                    <Image
                                        src="/research/current-comparison.png"
                                        alt="Chart comparing TPU vs PLA gripper current"
                                        width={500}
                                        height={400}
                                        className="w-full rounded-lg"
                                    />
                                    <figcaption className="text-sm text-stone-400 mt-2">Gripper current feedback for TPU vs PLA cubes</figcaption>
                                </figure>
                                <figure className="w-full">
                                    <Image
                                        src="/research/position-comparison.png"
                                        alt="Chart comparing follower and leader motor positions for TPU vs PLA"
                                        width={500}
                                        height={400}
                                        className="w-full rounded-lg"
                                    />
                                    <figcaption className="text-sm text-stone-400 mt-2">Follower and leader motor positions for TPU vs PLA</figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold text-violet-400">conclusions</h2>
                            <p className="text-white leading-relaxed text-lg">
                                Motor current provided a strong complementary signal when visual appearance was similar and joint
                                differences were subtle. This improved confidence and task success in low-cost hardware.
                            </p>
                            <h3 className="text-2xl font-semibold text-stone-200">further research</h3>
                            <ul className="list-disc pl-6 text-white leading-relaxed text-lg space-y-2">
                                <li>Test visually distinct objects to isolate multimodal effects.</li>
                                <li>Include current from all 6 joints for richer contact feedback.</li>
                                <li>Validate on practical tasks like fruit picking.</li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold text-stone-200">references</h2>
                            <ul className="list-disc pl-6 text-stone-200 leading-relaxed space-y-3">
                                <li>
                                    <b>Zhao TZ, et al. (2023).</b> "Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware."
                                    arXiv. Available from:{" "}
                                    <a
                                        href="https://arxiv.org/abs/2304.13705"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="underline"
                                    >
                                        https://arxiv.org/abs/2304.13705
                                    </a>
                                </li>
                                <li>
                                    <b>Tsuji T, et al. (2025).</b> "A Survey on Imitation Learning for Contact-Rich Tasks in Robotics."
                                    arXiv. Available from:{" "}
                                    <a
                                        href="https://arxiv.org/abs/2506.13498"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="underline"
                                    >
                                        https://arxiv.org/abs/2506.13498
                                    </a>
                                </li>
                                <li>
                                    <b>He Z, et al. (2024).</b> "FoAR: Force-Aware Reactive Policy for Contact-Rich Robotic Manipulation."
                                    arXiv. Available from:{" "}
                                    <a
                                        href="https://arxiv.org/abs/2411.15753"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="underline"
                                    >
                                        https://arxiv.org/abs/2411.15753
                                    </a>
                                </li>
                                <li>
                                    <b>Li Y, Hannaford B. (2017).</b> "Gaussian Process Regression for Sensorless Grip Force Estimation of
                                    Cable Driven Elongated Surgical Instruments." IEEE Robotics and Automation Letters,
                                    2(3):1312–1319.
                                </li>
                                <li>
                                    <b>Kobayashi M, et al. (2024).</b> "ILBiT: Imitation Learning for Robot Using Position and Torque
                                    Information based on Bilateral Control with Transformer." arXiv. Available from:{" "}
                                    <a
                                        href="https://arxiv.org/abs/2401.16653"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="underline"
                                    >
                                        https://arxiv.org/abs/2401.16653
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-semibold">full poster (pdf)</h2>
                        <iframe
                            src="/research_poster.pdf"
                            className="w-full h-[80vh] rounded-lg border border-stone-600"
                            title="Research Poster PDF"
                        />
                    </section>
                </div>
            </div>
        </main>
    );
}