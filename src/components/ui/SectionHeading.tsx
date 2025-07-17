import { motion } from 'framer-motion';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

const SectionHeading = ({ title, subtitle, centered = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-10 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-neutral-900"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mt-4 text-lg text-neutral-600 max-w-3xl ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;