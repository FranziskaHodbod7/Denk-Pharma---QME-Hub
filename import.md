
# Import

## Taxonomies

**Overview**
```bash
./flow taxonomy:seed --input-dir /app/source/Data/DP_Import_23_06_2026 --language en_GB
./flow taxonomy:seed --input-dir /app/source/Data/DP_Import_23_06_2026 --language es_ES
./flow taxonomy:seed --input-dir /app/source/Data/DP_Import_23_06_2026 --language fr_FR
```

**Seeding Vocabularies**
```bash
./flow taxonomy:seedSingle --input-dir /app/source/Data/DP_Import_23_06_2026 --vocabulary substance-unit --language en_GB && \
./flow taxonomy:seedSingle --input-dir /app/source/Data/DP_Import_23_06_2026 --vocabulary substance --language en_GB && \
./flow taxonomy:seedSingle --input-dir /app/source/Data/DP_Import_23_06_2026 --vocabulary medications --language en_GB && \
./flow taxonomy:seedSingle --input-dir /app/source/Data/DP_Import_23_06_2026 --vocabulary medications --language fr_FR && \
./flow taxonomy:seedSingle --input-dir /app/source/Data/DP_Import_23_06_2026 --vocabulary packaging --language en_GB && \
./flow taxonomy:seedSingle --input-dir /app/source/Data/DP_Import_23_06_2026 --vocabulary packaging --language es_ES && \
./flow taxonomy:seedSingle --input-dir /app/source/Data/DP_Import_23_06_2026 --vocabulary packaging --language fr_FR && \
./flow taxonomy:seedSingle --input-dir /app/source/Data/DP_Import_23_06_2026 --vocabulary administration-form --language en_GB && \
./flow taxonomy:seedSingle --input-dir /app/source/Data/DP_Import_23_06_2026 --vocabulary administration-form --language es_ES && \
echo "Finished"
```

## Products

**Generate Products XML**
```bash
./flow denkpharma.productimport:import:convert --input-dir /app/source/Data/DP_Import_23_06_2026 --output /app/source/Data/DP_Import_23_06_2026/products.en_GB.xml --language en_GB && \
./flow denkpharma.productimport:import:convert --input-dir /app/source/Data/DP_Import_23_06_2026 --output /app/source/Data/DP_Import_23_06_2026/products.es_ES.xml --language es_ES && \
./flow denkpharma.productimport:import:convert --input-dir /app/source/Data/DP_Import_23_06_2026 --output /app/source/Data/DP_Import_23_06_2026/products.fr_FR.xml --language fr_FR
```

```
ERROR missing-master (1)
    1×  product DENK_1266 has no Basic-data master row
```

**Import Products XML**

```bash
./flow denkpharma.productimport:import:import --input /app/source/Data/DP_Import_23_06_2026/products.en_GB.xml --language en_GB --dry-run
./flow denkpharma.productimport:import:import --input /app/source/Data/DP_Import_23_06_2026/products.es_ES.xml --language es_ES --dry-run
./flow denkpharma.productimport:import:import --input /app/source/Data/DP_Import_23_06_2026/products.fr_FR.xml --language fr_FR --dry-run

./flow denkpharma.productimport:import:import --input /app/source/Data/DP_Import_23_06_2026/products.en_GB.xml --language en_GB && \
./flow denkpharma.productimport:import:import --input /app/source/Data/DP_Import_23_06_2026/products.es_ES.xml --language es_ES && \
./flow denkpharma.productimport:import:import --input /app/source/Data/DP_Import_23_06_2026/products.fr_FR.xml --language fr_FR
```

## Images

```bash
./flow imageimport:import --input-dir /app/source/Data/optimized --dry-run
./flow imageimport:import --input-dir /app/source/Data/optimized
```

```bash
./flow structureadjustments:fix

./flow resource:publish
```